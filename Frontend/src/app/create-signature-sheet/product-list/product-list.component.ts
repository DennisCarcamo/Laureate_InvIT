import { Component, OnInit,  Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common'
import { tick } from '@angular/core/testing';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


  //crear una clase un diccionario


export class ProductListComponent implements OnInit {
  public product: any = '';
  public allProducts:any = [];
  public selectedProducts: any = [];
  public bool: any = false;

  public meta: any = [];
  public page: any = 0;
  public count: any;
  public cursor: any = 0;
  public more: any;
  public showmeta: any = false;
  public shownext: any = false;
  public showpreview: any = false;
  public ref: any = [];
  public selectproducts:any = [];
  @Output() public productsevent = new EventEmitter();
  public var: any = 2;
  public cont: any = 0;
  public url;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.find();
  }

  textproduct(event:any){
    this.product = event.target.value
    //console.log(this.product);
  }

  onSelect(selectedItem: any) {
    let x = {
      'CIID': selectedItem.ID,
      'PRODUCT_CODE': selectedItem.PRODUCT_CODE,
      'CI_NAME' :selectedItem.CI_NAME,
      'SERIAL_NUMBER': selectedItem.SERIAL_NUMBER,
      'MODEL': selectedItem.MODEL,
      'CI_TYPE' : selectedItem.CI_TYPE 
    };
    let index = 0;
      
    for(let i of this.selectproducts){
      if(x.CI_NAME == i.CI_NAME){
        index = 1;
      }
    }
    if(index == 0){
      if(x.PRODUCT_CODE){

        this.selectproducts.push(x);
        this.productsevent.emit(this.selectproducts);
        this.bool = true;
      }else{
        alert('No Product Code.');
      }
    }
    else{
      console.log("Item already exist");
    }
    
    
    //alert(selectedItem.CI_NAME); 
    for ( let p of this.selectproducts){  
      console.log(p.CI_NAME);
    }
    console.log("-----------------------");
    //console.log("Selected item Id: ", selectedItem.PRODUCT_CODE); // You get the Id of the selected item here
    //alert(selectedItem.PRODUCT_CODE);
  }

  onRemove(selectedItem: any){
    let x =  selectedItem.PRODUCT_CODE;
  
    for(let item of this.selectproducts){
      if(item.PRODUCT_CODE == x){

        this.selectproducts.splice(this.selectproducts.indexOf(item),1);
      } 

    }

    for ( let p of this.selectproducts){ 
      console.log(p.CI_NAME);
    }
    console.log("-----------------------");
  }

  searchProducts(){
    this.url = 'http://127.0.0.1:5000/api/v1/assetproductsearch?page='+this.cursor + '&limit=10&text=' + this.product +'&status=In Store';
    this.httpClient.get<elementos>
    (this.url)
    .subscribe(
      (data) => {
        this.allProducts = data.query;
        this.meta = data.meta;
        this.count = this.meta.count;
        this.cursor = this.meta.cursor;
        this.more = this.meta.more;
        this.showmeta = true;

        if(this.more){
          this.shownext = true;
        }else{
          this.shownext = false;
        }

        if(this.cursor == 10){
          this.showpreview = false
        }
        else{
          this.showpreview = true;
        }
        //alert( this.cursor );
       }
      
       )
  }

  preview(){
    this.cursor = this.cursor - 20;
    this.searchProducts();
    //alert(this.cursor);
  }

  find(){
    this.cursor = 0;
    this.searchProducts();
    //alert(this.cursor + "aqui" );
  }


}


interface elementos {
  query : string;
  meta: string;
  count: number;

}