import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { async } from "@angular/core/testing";
import { WorkBook, read, utils, write, readFile } from "xlsx";
import { DashboardService } from "../dashboard.service";
import { CookieService } from "ngx-cookie-service";
import { templateJitUrl } from "@angular/compiler";
import { SearchEmployeeService } from "../create-signature-sheet/search-employee.service";
import * as jwt_decode from "jwt-decode";
import { setEnviromentVariables } from "../../environments/appEnviromentConfig";

@Component({
  selector: "app-main-bitly",
  templateUrl: "./main-bitly.component.html",
  styleUrls: ["./main-bitly.component.css"],
})
export class MainBitlyComponent implements OnInit {
  public selectedFile: File = null;
  public uploadedFile: boolean;
  public ReadedRecords: any = [];

  public Domain = "laur.cc";
  public GroupGuid = "";
  public Title: any = "";
  public Tags = [];
  public Deeplinks = [];
  public LongUrl;
  public BitlinkLoaded: "";
  public BearerToken = "";
  public BitlinkId: "";
  public CustomBitlink;
  public boolToken = false;
  public value = "55";
  public boolProgressBar = false;
  public BarValue = 0;
  public RecordValueToBar: any = 0;
  public mainImage;
  public totalErrors;
  public SuccessRecords = 0;
  public count = 0;
  public isCollapsed = false;
  public collapsedOne = false;
  public collapsedTwo = false;
  public collapsedTree = false;
  public showNumber = 10;
  public boolPagination = 10;
  public privilege = false;

  public errorArray: any = [];
  public paginationPages: any = [];
  public pageNumber;
  public errorArrayFlag: any = [];

  constructor(
    private _bitlyApiService: DashboardService,
    private cookieService: CookieService,
    private _Service: SearchEmployeeService
  ) {
    this.mainImage = "/assets/images/template_xls_file.png";
  }

  ngOnInit() {
    if (setEnviromentVariables() == "dev") {
      this.privilege = true;
    } else if (setEnviromentVariables() == "prod") {
      let val = this.cookieService.get("token");
      if (val) {
        let djtw = jwt_decode(val);
        let identity = djtw["identity"];
        for (var _i = 0; _i < identity.length; _i++) {
          if (identity[_i]["privilege"] == "pdf") {
            this.privilege = true;
          }
        }
      } else {
        this.privilege = true;
        //window.location.href = '/login';
      }
    }

    if (this.privilege) {
      if (this.cookieService.get("btoken")) {
        this.boolToken = true;
        this.CallBitlyServiceGetGroupGuid();
      } else {
        // console.error('Token Not Found');
        window.location.href = "/blogin";
      }
    } else {
      window.location.href = "/login";
    }
  }

  CalculateErros() {
    let newArray = [];
    newArray = this.errorArray.filter(
      (error, index, self) =>
        index === self.findIndex((t) => t.Row === error.Row)
    );
    this.totalErrors = newArray.length;
    //this.SuccessRecords = this.ReadedRecords.length - this.totalErrors;
  }

  CallBiltyServiceCreateBitlink() {
    if (this.GroupGuid == "") {
      alert("guid vacio");
    } else {
      this.ReadedRecords.forEach(async (obj) => {
        if (obj.LONGURL && obj.SHORTURL) {
          this.CustomBitlink = this.RemoveCharacters(obj.SHORTURL, 1);
          this.LongUrl = this.RemoveCharacters(obj.LONGURL, 2);

          // console.log('custom ' + this.CustomBitlink);
          // console.log('Long ' + this.LongUrl);
          if (this.CustomBitlink != "error" && this.LongUrl != "error") {
            let customParam = this.CustomBitlink;
            this._bitlyApiService
              .CreateBiltink(
                this.Domain,
                obj.DESCRIPTION,
                this.GroupGuid,
                obj.LONGURL,
                this.cookieService.get("btoken")
              )
              .subscribe((result) => {
                // // console.log('post');
                // console.log(result)
                // // console.log(result['created_at']);
                if (result["created_at"]) {
                  const Res = JSON.stringify(result);
                  this.BitlinkId = JSON.parse(Res).id;
                  // console.log(this.CustomBitlink);
                  this.CallBitlyServiceRedirectBitlink(
                    this.BitlinkId,
                    customParam
                  );
                  this.SuccessRecords += 1;
                  this.BarValue = this.RecordValueToBar + this.BarValue;
                  this.GetBarValue();
                } else {
                  let a = {
                    Row: obj.__rowNum__ + 1,
                    description: obj.DESCRIPTION,
                    short_url: obj.SHORTURL,
                    long_url: obj.LONGURL,
                    error: result["message"],
                  };
                  if (this.errorArrayFlag.length < 10) {
                    this.errorArrayFlag.push(a);
                  }
                  this.errorArray.push(a);
                  this.BarValue = this.RecordValueToBar + this.BarValue;
                  // // console.log('get value 2');
                  this.GetBarValue();
                }
                // // console.table(this.errorArray);
              });
          } else {
            if (this.CustomBitlink === "error") {
              let b = {
                Row: obj.__rowNum__ + 1,
                description: obj.DESCRIPTION,
                short_url: obj.SHORTURL,
                long_url: obj.LONGURL,
                error: "Incorrect Short URL",
              };
              if (this.errorArrayFlag.length < 10) {
                this.errorArrayFlag.push(b);
              }
              this.errorArray.push(b);
              this.BarValue = this.RecordValueToBar + this.BarValue;
              // // console.log('get value 3');
              this.GetBarValue();
              // // //console.log(this.errorArray);
            }
            if (this.LongUrl === "error") {
              let a = {
                Row: obj.__rowNum__ + 1,
                description: obj.DESCRIPTION,
                short_url: obj.SHORTURL,
                long_url: obj.LONGURL,
                error: "Incorrect Long URL",
              };
              if (this.errorArrayFlag.length < 10) {
                this.errorArrayFlag.push(a);
              }
              this.errorArray.push(a);
              this.BarValue = this.RecordValueToBar + this.BarValue;
              // // console.log('get value 4');

              this.GetBarValue();
            }
          }
        } else {
          if (!obj.LONGURL) {
            let a = {
              Row: obj.__rowNum__ + 1,
              description: obj.DESCRIPTION,
              short_url: obj.SHORTURL,
              long_url: obj.LONGURL,
              error: "Missing LONGURL",
            };
            if (this.errorArrayFlag.length < 10) {
              this.errorArrayFlag.push(a);
            }
            this.errorArray.push(a);
          }
          if (!obj.SHORTURL) {
            let a = {
              Row: obj.__rowNum__ + 1,
              description: obj.DESCRIPTION,
              short_url: obj.SHORTURL,
              long_url: obj.LONGURL,
              error: "Missing SHORTURL",
            };
            if (this.errorArrayFlag.length < 10) {
              this.errorArrayFlag.push(a);
            }
            this.errorArray.push(a);
          }
          // // console.log('get value 5');
          this.BarValue = this.RecordValueToBar + this.BarValue;
          this.GetBarValue();
        }
      });
    }

    this.CalculateErros();
    this.pagination();
  }

  CallBiltyServiceGetBitlinkInfo() {
    this._bitlyApiService
      .GetBitlinkInfo(this.BitlinkLoaded, this.cookieService.get("btoken"))
      .subscribe((result) => {
        // // console.log(result);
      });
  }

  CallBitlyServiceRedirectBitlink(BitlinkId1, CustomBitlink2) {
    this._bitlyApiService
      .RedirectBitlink(
        BitlinkId1,
        CustomBitlink2,
        this.cookieService.get("btoken")
      )
      .subscribe(async (result) => {
        // // console.log('patch')
        // console.table(result);
        const Res = JSON.stringify(result);
        // // await console.log((JSON.parse(Res)));
      });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    this.uploadedFile = true;
  }

  readData1() {
    this.BarValue = 0;
    this.errorArray = [];
    this.errorArrayFlag = [];
    this.totalErrors = 0;
    this.SuccessRecords = 0;
    // tslint:disable-next-line:only-arrow-functions
    if (!this.selectedFile) {
      alert("No file selected");
    } else {
      this.readData().then((res) => {
        this.ReadedRecords = res as Array<any>;
        //alert(this.ReadedRecords.length);
        if (this.ReadedRecords.length > 0) {
          if (
            this.ReadedRecords[0].DESCRIPTION &&
            this.ReadedRecords[0].SHORTURL &&
            this.ReadedRecords[0].LONGURL
          ) {
            this.boolProgressBar = true;
            this.RecordValueToBar = 100 / this.ReadedRecords.length;
            this.CallBiltyServiceCreateBitlink();
          } else {
            alert("File format incorrect");
          }
        } else {
          alert("The selected file is empty");
        }
        //alert('valor a sumar ' + this.RecordValueToBar);
        // // console.log(resolve.length);
        // // resolve.forEach(obj => console.log(obj));
      });
    }
  }

  readData() {
    const reader = new FileReader();
    let workbook;
    let XLRowObject: any;
    let jsonObject: string = null;
    let TotalRecords: any;
    reader.readAsBinaryString(this.selectedFile);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:only-arrow-functions
      reader.onload = function () {
        //  alert(reader.result);
        const data = reader.result;
        workbook = read(data, { type: "binary" });
        // // console.log(workbook);
        // tslint:disable-next-line:only-arrow-functions
        workbook.SheetNames.forEach(function (sheetName) {
          // Here is your object
          XLRowObject = utils.sheet_to_json(workbook.Sheets[sheetName]);
          jsonObject = JSON.stringify(XLRowObject);
          // //console.log(typeof(XLRowObject.length));
          resolve(XLRowObject);
        });
      };
    });
  }

  // removes whitespace and http//
  RemoveCharacters(Url, val) {
    if (val === 1) {
      if (Url.startsWith("http://laur.cc/")) {
        const NewUrl = Url.slice(7);
        return NewUrl.replace(/\s/g, "");
      } else {
        return "error";
      }
    } else {
      if (Url.startsWith("https://") || Url.startsWith("http://")) {
        return Url.replace(/\s/g, "");
      } else {
        return "error";
      }
    }
  }

  CallBitlyServiceGetGroupGuid() {
    // alert('Domain' + this.Domain +  this.cookieService.get('btoken') );
    this._bitlyApiService
      .GetGroupGuid(this.cookieService.get("btoken"))
      .subscribe((result) => {
        let tmp = JSON.stringify(result as Array<any>);
        let x = result["groups"];
        x.forEach((element) => {
          if (element["name"] == "IT OPS") {
            this.GroupGuid = element["guid"];
            // // console.log(' GUID = ' + this.GroupGuid);
          }
        });
      });
  }

  GetBarValue() {
    return this.BarValue;
  }

  changeCollapseOne() {
    if (this.collapsedOne) {
      this.collapsedOne = false;
    } else {
      this.collapsedOne = true;
    }
  }
  changeCollapseTwo() {
    if (this.collapsedTwo) {
      this.collapsedTwo = false;
    } else {
      this.collapsedTwo = true;
    }
  }
  changeCollapsetree() {
    if (this.collapsedTree) {
      this.collapsedTree = false;
    } else {
      this.collapsedTree = true;
    }
  }

  find() {
    console.table(this.errorArrayFlag);
    this.pagination();
    this.getValue(0);
    console.log(this.paginationPages);
  }

  pagination() {
    this.paginationPages = [];
    this.boolPagination = this.showNumber;
    let total = this.errorArray.length;
    let section = total / this.showNumber;
    for (var _i = 0; _i < section; _i++) {
      let x = {
        val: _i,
      };
      this.paginationPages.push(x);
    }
  }

  getValue(x: any) {
    if (this.boolPagination == this.showNumber) {
      console.log(this.errorArray);
      let min = x * this.showNumber;
      let max = min + this.showNumber;
      this.errorArrayFlag = [];
      for (var i = min; i < max; i++) {
        if (i < this.errorArray.length) {
          this.errorArrayFlag.push(this.errorArray[i]);
        }
      }
    } else {
      this.pagination();
    }
  }

  getTemplate() {
    let x = "bitly_template";
    if (this.boolToken) {
      let url = `http://hnlnoinvitqa.hnsc.net/xls/${x}`;
      window.location.href = url;
    } else {
      alert("Template Removed");
    }
  }
}
