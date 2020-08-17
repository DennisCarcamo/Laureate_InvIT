import { Component, OnInit } from "@angular/core";
import { NgModel } from "@angular/forms";
import { SearchEmployeeService } from "../../create-signature-sheet/search-employee.service";
import { HttpClient } from "@angular/common/http";
import { TemplateRef } from "@angular/core";
import { fail } from "assert";
import { forEach } from "@angular/router/src/utils/collection";
import { UrlHandlingStrategy } from "@angular/router/src/url_handling_strategy";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";
import * as jwt_decode from "jwt-decode";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";
import { trigger, transition, animate, style } from "@angular/animations";
import { setEnviromentVariables } from "../../../environments/appEnviromentConfig";

@Component({
  selector: "app-pdfs",
  templateUrl: "./pdfs.component.html",
  styleUrls: ["./pdfs.component.css"],
  animations: [
    trigger("slideInOut", [
      transition(":enter", [
        style({ transform: "translateY(-100%)" }),
        animate("200ms ease-in", style({ transform: "translateY(0%)" })),
      ]),
      transition(":leave", [
        animate("200ms ease-in", style({ transform: "translateY(-100%)" })),
      ]),
    ]),
  ],
})
export class PdfsComponent implements OnInit {
  public fullImagePath;

  constructor(
    private _Service: SearchEmployeeService,
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router,
    private modalService: BsModalService
  ) {
    this.fullImagePath = "/assets/images/advice-advise-advisor-7096.jpg";
  }

  public text;
  public pdfFile;
  public pdf_id;
  public pdf_flag;
  public boolpdfroute = false;
  public url;
  public selectedFile: File = null;

  //table params
  public page = 1;
  public limit = 10;
  public searchText = "";
  public search;
  public readyUpload = false;
  public sheet_option = "5";
  public status_option = "1";
  public option: any;

  //service response
  public sheets = [];
  public meta = [];
  public shownext: any = false;
  public showpreview: any = false;
  public privilege = false;
  public siteInfo = false;

  public disable_flag = 1;
  public messegeError = "More information required";
  public fileUploadedflag = false;

  public findPdfBool = false;

  modalRef: BsModalRef;

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
        //this.privilege = true;
        window.location.href = "/login";
      }
    }

    /*Before Dennis Changes
    //if(!this.cookieService.get('user_name')){
      //this.router.navigateByUrl('/');
    //}
    let val = this.cookieService.get("token");
    if(val){
      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'pdf' ){
          this.privilege = true;
        }
      }

    }else{
      //this.privilege = true;
      window.location.href = '/login';
    }
    Before Dennis Changes*/

    if (this.privilege) {
      this._Service
        .searchSignatureSheets(
          this.page,
          this.searchText,
          this.limit,
          this.sheet_option,
          this.status_option
        )
        .subscribe((res) => {
          let x = res["SignatureSheets"];
          let y = res["meta"];
          this.sheets = x;
          this.meta = y;
          this.page = this.page + 1;

          if (this.meta["more"]) {
            this.shownext = true;
          } else {
            this.shownext = false;
          }

          if (this.meta["cursor"] == 11) {
            this.showpreview = false;
          } else {
            this.showpreview = true;
          }
          //this.currentproducts = this.selectproducts;
        });
    } else {
      window.location.href = "/login";
    }
  }

  test() {
    //alert(this.option);
    console.log(this.sheet_option + " " + this.status_option);
  }

  siteInformation() {
    if (this.siteInfo) {
      this.siteInfo = false;
    } else {
      this.siteInfo = true;
    }
  }

  searchPdf() {
    if (this.text) {
      this.boolpdfroute = true;
      this.url = `http://hnlnoinvitqa.hnsc.net/pdf/${this.text}`;
      window.location.href = this.url;
    } else {
      this.messegeError = "Select a sheet First.!";
      document.getElementById("modal").click();
    }
  }

  searchScannedPdf() {
    if (this.text) {
      this._Service.pdf_validation(this.pdf_id).subscribe((res) => {
        if (res["message"] == "Yes") {
          this.boolpdfroute = true;
          this.url = `http://hnlnoinvitqa.hnsc.net/scannedpdf/${this.text}`;
          window.location.href = this.url;
        } else {
          //alert('No file to show');
          this.messegeError = "No file to show";
          document.getElementById("modal").click();
        }
      });
    } else {
      this.messegeError = "Select a sheet First";
      document.getElementById("modal").click();
    }
  }

  searchSheet(event: any) {
    this.search = event.target.value;
  }

  onSelect(selectedItem: any) {
    this.findPdfBool = true;
    let x = {
      ID_SIGNATURE: selectedItem.id_signature,
      EMPLOYEE_ID: selectedItem.id_employee,
    };

    let pdfname = x["ID_SIGNATURE"] + x["EMPLOYEE_ID"];
    this.text = pdfname;
    this.pdf_id = x["ID_SIGNATURE"];
  }
  onselectUpload(selectedItem: any) {
    let x = {
      ID_SIGNATURE: selectedItem.id_signature,
      EMPLOYEE_ID: selectedItem.id_employee,
      DATE: selectedItem.updated,
      FIRST_NAME: selectedItem.first_name,
      LAST_NAME: selectedItem.last_name,
    };

    let pdfname = x["ID_SIGNATURE"] + x["EMPLOYEE_ID"];
    this.pdf_id = x["ID_SIGNATURE"];
    this.pdfFile = pdfname;
    this.readyUpload = true;
    //console.log(this.pdf_id);
  }

  next() {
    if (this.search) {
      this.search = this.search;
    } else {
      this.search = "";
    }
    if (this.sheet_option != "3") {
      this.status_option = "1";
    }
    this._Service
      .searchSignatureSheets(
        this.page,
        this.search,
        this.limit,
        this.sheet_option,
        this.status_option
      )
      .subscribe((res) => {
        let x = res["SignatureSheets"];
        let y = res["meta"];
        this.sheets = x;
        this.meta = y;
        this.page = this.page + 1;

        if (this.meta["more"]) {
          this.shownext = true;
        } else {
          this.shownext = false;
        }

        if (this.meta["cursor"] == 11) {
          this.showpreview = false;
        } else {
          this.showpreview = true;
        }
        //this.currentproducts = this.selectproducts;
      });
  }

  preview() {
    this.page = this.page - 2;
    this.next();
  }

  find() {
    this.page = 1;
    this.next();
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.fileUploadedflag = true;
  }

  onUpload() {
    if (this.fileUploadedflag) {
      this._Service.pdf_validation(this.pdf_id).subscribe((res) => {
        console.log(res["message"]);
        if (res["message"] == "Yes") {
          this.messegeError = "Image already Uploaded";
          document.getElementById("modal").click();
          //alert('Image already Uploaded');
        } else {
          this._Service
            .pdf_image_insert(this.pdf_id, this.pdfFile)
            .subscribe((res) => {
              console.log(res);
              //alert();
              if (res["message"] == "Done") {
                //alert('Cargar archivo terminar');
                //alert(this.pdfFile);
                const fd = new FormData();
                fd.append("pdf", this.selectedFile, this.selectedFile.name);
                this.httpClient
                  .post(
                    `http://hnlnoinvitqa.hnsc.net/upload/${this.pdfFile}`,
                    fd
                  )
                  .subscribe((result) => {
                    if (result["message"] == "Done") {
                      window.location.href = "/pdf";
                    }
                  });
              } else {
                this.messegeError = "Something Wrong";
                document.getElementById("modal").click();
              }
            });
        }
      });
    } else {
      this.messegeError = "No file Chosen";
      document.getElementById("modal").click();
    }
  }

  disable() {
    this.disable_flag = 0;
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    document.getElementById("errorMessage").innerHTML = this.messegeError;
  }
}
