import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { tick } from '@angular/core/testing';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

  public product: any;
  public allProducts:any = [];
  public selectedProducts: any = [];
  public bool: any = false;
  @Input() public parentData;
  @Output() public productremovesevent = new EventEmitter();
  @Output() public currentproductrevent = new EventEmitter();
  public selecteduser;
  public currentproducts: any = [];
  public selectproducts:any = [];
  
  constructor(private _searchEmployees : SearchEmployeeService) { }

  ngOnInit() {
   this.selecteduser = this.parentData[0]; 
   //console.log(this.selecteduser['EMPLOYEE_ID']);
   //alert(this._searchEmployees.getTest());

   this._searchEmployees.getUserProducts(this.selecteduser['EMPLOYEE_ID'])
   .subscribe(res => {
      let x = res['SignatureSheetsProducts'];
      this.currentproducts = x;
      console.log(this.currentproducts);
      console.log(x);
      //this.currentproducts = this.selectproducts;
    })
  }

  onRemove(selectedItem: any){
    let x =  selectedItem;
    let index = 0;
      
    for(let i of this.selectproducts){
      if(x.ciid == i.ciid){
        index = 1;
      }
    }
    if(index == 0){
      this.selectproducts.push(x);
      this.bool = true;
      this.productremovesevent.emit(this.selectproducts);
      this.currentproductrevent.emit(this.currentproducts);
      
    }
    else{
      console.log("Item already exist");
    }

  }

  rollback(){
    this.selectproducts.splice(0);
    //this.bool = false;  
  }

  noChanges(){
    this.currentproductrevent.emit(this.currentproducts);
  }

}
