import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {
    public types:any = [];
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

getTypes(){
  this.httpClient.get<elementos>
  ('http://127.0.0.1:5000/api/v1/types')
  .subscribe(
    (data) => {
      this.types = data.Types;
      console.log(data.Types);
     }
    
     )
}

}

interface elementos {
  Types : string;

}
