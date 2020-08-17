import { Component, OnInit } from '@angular/core';
import { WorkBook, read, utils, write, readFile } from 'xlsx';
import { BitlyApiService } from '../../bitly-api.service';
import { Title } from '@angular/platform-browser';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-file-loader',
  templateUrl: './file-loader.component.html',
  styleUrls: ['./file-loader.component.css']
})
export class FileLoaderComponent implements OnInit {
  public selectedFile: File = null;
  public uploadedFile: boolean;
  public ReadedRecords: any = [];

  public Domain = 'laur.cc';
  public GroupGuid = 'B01102AXGpQ';
  public Title: any = '';
  public Tags = [];
  public Deeplinks = [];
  public LongUrl: '';
  public BitlinkLoaded: '';
  public BearerToken = '80074317e2cce37132fde1762344b60d6fddd9b2';
  public BitlinkId: '';
  public CustomBitlink;

  // tslint:disable-next-line:variable-name
  constructor(private _bitlyApiService: BitlyApiService) { }

  ngOnInit() {
  }

  CallBiltyServiceCreateBitlink() {
    this.ReadedRecords.forEach(obj => {
      this._bitlyApiService.CreateBiltink(this.Domain, obj.DESCRIPTION, this.GroupGuid, this.Tags,
        this.Deeplinks, obj.LONGURL, this.BearerToken)
        .subscribe(result => {
          console.log('bitlink creado');
          const Res = (JSON.stringify(result));
          this.BitlinkId = (JSON.parse(Res)).id;
          this.CustomBitlink = this.RemoveCharacters(obj.SHORTURL, 1);
          this.LongUrl = this.RemoveCharacters (obj.LONGURL , 2);
          // console.log('bitlinkId: ' + this.BitlinkId);
          // console.log('LongURL: ' + this.LongUrl);
          this.CallBitlyServiceRedirectBitlink();
        });
    });
    console.log('completo');
  }

  CallBiltyServiceGetBitlinkInfo() {
    this._bitlyApiService.GetBitlinkInfo(this.BitlinkLoaded, this.BearerToken)
      .subscribe(result => {
        console.log(result);
      });

  }

  CallBitlyServiceRedirectBitlink() {
    this._bitlyApiService.RedirectBitlink(this.BitlinkId, this.CustomBitlink, this.BearerToken)
      .subscribe(async result => {
        const Res = (JSON.stringify(result));
        await console.log((JSON.parse(Res)));
      });
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0] as File;
    this.uploadedFile = true;
  }

  readData1() {
    // tslint:disable-next-line:only-arrow-functions
    this.readData().then(res => {
      this.ReadedRecords = res as Array<any>;
      // console.log(resolve.length);
      // resolve.forEach(obj => console.log(obj));
      this.CallBiltyServiceCreateBitlink();
    });
  }

  readData() {
    const reader = new FileReader();
    let workbook;
    let XLRowObject: any;
    let jsonObject: string = null;
    reader.readAsBinaryString(this.selectedFile);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:only-arrow-functions
      reader.onload = function () {
        //  alert(reader.result);
        const data = reader.result;
        workbook = read(data, { type: 'binary' });
        // console.log(workbook);
        // tslint:disable-next-line:only-arrow-functions
        workbook.SheetNames.forEach(function (sheetName) {
          // Here is your object
          XLRowObject = utils.sheet_to_json(workbook.Sheets[sheetName]);
          jsonObject = JSON.stringify(XLRowObject);
          // console.log(XLRowObject.length);
          resolve(XLRowObject);
        });
      };
    });
  }


  // removes whitespace and http//
  RemoveCharacters(Url, val) {
    if (val === 1) {
      const NewUrl = Url.slice(7);
      return NewUrl.replace(/\s/g, '');
    } else {
      return Url.replace(/\s/g, '');
    }

  }

}

