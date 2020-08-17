import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
    public types:any = [];
    public option: any;
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

getTypes(){
  this.httpClient.get<elementos>
  ('http://hnlnoinvitqa.hnsc.net/api/v1/types')
  .subscribe(
    (data) => {
      this.types = data.Types;
      console.log(data.Types);
     }
    
     )

}

getOption(event:any){
  this.option = event.target.value
}

verify(){
  alert(this.option);
}

}

interface elementos {
  Types : string;

}
