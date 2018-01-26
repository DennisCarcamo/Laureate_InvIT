import { Component, OnInit } from '@angular/core';
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
  public product: any;
  public allProducts:any = [];
  public selectedProducts: any = [];

  public meta: any = [];
  public page: any = 0;
  public count: any;
  public cursor: any = 0;
  public more: any;
  public showmeta: any = false;
  public shownext: any = false;
  public showpreview: any = false;
  //public empref: any = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  public ref: any = [];
  public selectproducts:any = [];
  public var: any = 2;
  //public max;
  //public min;
  public cont: any = 0;
  public url;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  textproduct(event:any){
    this.product = event.target.value
    //console.log(this.product);
  }

  onSelect(selectedItem: any) {
    let x = {
      'PRODUCT_CODE': selectedItem.PRODUCT_CODE,
      'CI_NAME' :selectedItem.CI_NAME,
      'SERIAL_NUMBER': selectedItem.SERIAL_NUMBER,
      'CI_TYPE' : selectedItem.CI_TYPE 
    };

    this.selectproducts.push(x);
    //alert(selectedItem.CI_NAME); 
    for ( let p of this.selectproducts){ alert(p.CI_NAME);}

    //console.log("Selected item Id: ", selectedItem.PRODUCT_CODE); // You get the Id of the selected item here
    //alert(selectedItem.PRODUCT_CODE);
  }

  onRemove(){
    alert("Ready to remove bithc");
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