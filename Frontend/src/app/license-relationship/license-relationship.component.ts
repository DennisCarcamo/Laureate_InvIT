import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-license-relationship',
  templateUrl: './license-relationship.component.html',
  styleUrls: ['./license-relationship.component.css']
})
export class LicenseRelationshipComponent implements OnInit {
  licenseRelationship: any;

  constructor() { }

  ngOnInit() {
    
      this.licenseRelationship = ['license-relationship'];

  }


}
