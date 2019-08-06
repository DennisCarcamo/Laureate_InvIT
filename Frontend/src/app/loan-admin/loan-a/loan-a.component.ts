import { Component, OnInit, TemplateRef   } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { fail } from 'assert';
import { forEach } from '@angular/router/src/utils/collection';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { tick } from '@angular/core/testing';
import { CookieService } from 'ngx-cookie-service';
import {Router} from '@angular/router';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-loan-a',
  templateUrl: './loan-a.component.html',
  styleUrls: ['./loan-a.component.css']
})
export class LoanAComponent implements OnInit {

  public boolemployee:any = false;
  public selectemploye:any = [];
  public selectLoanSheet:any = [];
  public boolfirst:any = true;
  public boolproducts:any = false;
  public current_sheet: any = false;
  public sheets = [];
  public page = 1;
  public limit = 10;
  public searchText = "";
  public modalProducts:any = [];
  public meta = [];
  public shownext: any = false;
  public showpreview: any = false;
  public option: any;
  modalRef: BsModalRef
  public privilege = false;
  public offBoardingProducts = [];
  public booloffboarding = false;
  public validation = 0;

  public fullImagePath;
  public siteInfo = false;

  public boolLoanPending = false;
  public messegeError = 'More information required.';

  constructor(private modalService: BsModalService, private _Service : SearchEmployeeService, private cookieService: CookieService, private router : Router) { 
        this.fullImagePath = '/assets/images/adult-book-business-297755.jpg'
  }

  ngOnInit() {
    /*if(!this.cookieService.get('user_name')){
      this.router.navigateByUrl('/');
    }*/
    let val = this.cookieService.get("token");
    if(val){
      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'offboarding-loan' ){
          this.privilege = true;
        }
      }
  
      if(this.privilege){
  
      }
      else{
        window.location.href = '/login';
      }

    }else{
      //this.privilege = true;
      window.location.href = '/login';
    }

  }

  start(){
    this.boolfirst = true;
    
  }

  siteInformation(){
    if(this.siteInfo){
      this.siteInfo = false;
    }
    else{
      this.siteInfo = true;
    }  
  }

  validate(template: TemplateRef<any>){
    //alert(this.date + "" + this.option );
    if(this.option){
        this.boolemployee = true;
        this.boolfirst = false;
      

    }
    else{
      this.messegeError = 'Select Type first!'
      document.getElementById('errorModalbtn').click();
      //alert('Select Type first!');
    }
  }

  continueemployee(){
    //faltan los ifs;
    let x = this.selectemploye[0];
    if(x){
      if(this.option == 3){
        this.searchText = x.EMAIL
        this._Service.searchLoanSignatureSheets(this.page, this.searchText, this.limit, this.option)
        .subscribe(res => {
            console.log(res);
            let x = res['SignatureSheets'];
            let y = res['meta'];
            this.sheets = x;
            this.meta = y;
            this.page = this.page + 1;
    
    
            if(this.meta['more']){
              this.shownext = true;
            }else{
              this.shownext = false;
            }
    
            if(this.meta['cursor'] == 11){
              this.showpreview = false
            }
            else{
              this.showpreview = true;
            }
          //this.currentproducts = this.selectproducts;
          });
        this.boolemployee = false;
        this.boolproducts = true;
      }
      if(this.option == 2){
        this._Service.processValidation(x.EMPLOYEE_ID)
        .subscribe(res => {
          let m;
          m = res['message'];
          if(m == 'null'){
            alert('No signature to show');
            window.location.href = '/loan';
          }

          if(m['id_type'] == 2){
            alert('No signature to show');
            window.location.href = '/loan';
          }
          if((m['id_type'] != 2)){
            this.validation = 1;
            this._Service.getUserProducts(x.EMPLOYEE_ID)
            .subscribe(res=> {
              console.log(res);
              this.offBoardingProducts = res['SignatureSheetsProducts'];
              this.booloffboarding = true;
              this.boolemployee = false;
            })
          }
          console.log(res)
          
        })

      }
    }
    else{
      //alert("Select Employee first.!")
      this.messegeError = 'Select Employee first!'
      document.getElementById('errorModalbtn').click();
    }
  }



  onSelect(selectedItem: any){
    let x = {
      'ID_SIGNATURE': selectedItem.id_signature,
     'EMPLOYEE_ID': selectedItem.id_employee,
     
     };
     this.selectLoanSheet[0] = selectedItem;

  }

  openLoanModal(template: TemplateRef<any>) {
    let x = this.selectLoanSheet[0];
    console.log(this.selectLoanSheet)
    if(x){
      this._Service.searchLoanSheetsProducts(x.id_signature)
      .subscribe(res => {
       let x = res['Products'];
       if(x){
        this.modalProducts = x;
        //console.log(this.modalProducts);
        this.modalRef = this.modalService.show(template);
       }
       else{
         //alert('No products for that sheet');
         this.messegeError = 'No products for that sheet';
         document.getElementById('errorModalbtn').click();
       }
      })
      
    }
    else{
      //alert("Select a Sheet first");
      this.messegeError = 'Select a sheet first!';
      document.getElementById('errorModalbtn').click();
    }
    
  }

  confirm(){
    let x = this.selectLoanSheet[0];
    this._Service.updateOffLoanSheetsProducts(this.modalProducts, x.id_employee, x.id_signature)
    .subscribe(res => {
      if(res['message'] == 'Done'){
        alert('Relationships removed');
        window.location.href = '/loan';
      }
      else{
        //alert('Assets already removed');
        this.messegeError = 'Assets already removed!';
        document.getElementById('errorModalbtn').click();
      }
    })

  }

  decline(){
    window.location.href = '/loan';
  }

  openOffboardingModal(template: TemplateRef<any>){
    //Validar que no tenga hojas de prestamo pendientes.
    let x = this.selectemploye[0];
    //this.searchText = x.EMAIL
    this._Service.searchLoanSignatureSheets(1, x.EMAIL, 10, 3)
    .subscribe(res => {
        //console.log("############");
        //console.log(res);
        let y = res['meta'];
        let msg = res['message'];
        if(y){
          if(y['count'] > 0){
            this.boolLoanPending = true; 
          }
          else{
            this.boolLoanPending = false;
          }
        }else{
          if(msg){
            this.boolLoanPending = false;
          }
        }
        
      
        //condicionante si se debe mostrar o no el dialogo de offboarding.
         if(this.boolLoanPending){
          this.messegeError = 'This user have Loan sheets pending, make sure to release then first'
          document.getElementById('errorModalbtn').click();
         }
         else{
           this.modalRef = this.modalService.show(template);  
         }
      });

      
  }

  makeOffboarding(){
    let x = this.selectemploye[0];
    //let date = '00/00/2017'
    //hacer insert de la hoja primero
    if(this.validation == 1){

      this._Service.updateSheet(this.option, x.EMPLOYEE_ID, x.FIRST_NAME, x.LAST_NAME, x.EMAIL)
      .subscribe( res=> {
        console.log(res);
        if(res['message'] == 'Signature Sheet correctly inserted'){
  
          this._Service.createOffboarding(this.offBoardingProducts, x.EMPLOYEE_ID )
          .subscribe(res => {
            if(res['message'] == 'done'){
              alert('Offboarding Sheet correctly inserted')
              window.location.href = '/loan';
            }
            else{
              alert('Something Wrong');
              window.location.href = '/loan';
            }

          })
        }
        else{
          alert('Something Wrong');
          window.location.href = '/loan';
        }
      })
    }else{
      //alert('Offboarding Process already done');
      this.messegeError = 'Offboarding process already done';
      document.getElementById('errorModalbtn').click();
      
    }

  }

  openErrorModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    document.getElementById('errorMessage').innerHTML = this.messegeError;

  }


}
