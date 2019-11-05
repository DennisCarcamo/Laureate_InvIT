import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { LicenseService } from '../services/license.service';

import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Component({
  selector: 'app-license-relationship',
  templateUrl: './license-relationship.component.html',
  styleUrls: ['./license-relationship.component.css']
})
export class LicenseRelationshipComponent implements OnInit {
  employees: any[];
  employee: any;
  tags: any[];
  tag: any;
  currentPage: number;
  searchEmployee: string;
  moreResultsEmployees: boolean;
  isEmployeeCollapsed: boolean;
  isTagCollapsed: boolean;
  licenseId: number;
  license: any;
  users: any[];

  tagsLimit: number;
  tagsOffset: number;
  tagsSearch: string;
  tagsMoreResults: boolean;
  tagsForm: FormGroup;

  searchEmployeeForm: FormGroup;
  public privilege = false;

  constructor(
    private licenseService: LicenseService,
    private searchEmployeeService: SearchEmployeeService,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

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
      this.privilege = true;
      //window.location.href = '/login';
    }

    if(this.privilege){
      this.licenseId = this.route.snapshot.params['licenseId'];
      this.isEmployeeCollapsed = false;
      this.isTagCollapsed = true;
      this.moreResultsEmployees = true;
      this.currentPage = 0;
      this.searchEmployee = '';
  
      this.tagsLimit = 10;
      this.tagsOffset = 0;
      this.tagsSearch = '';
      this.tagsMoreResults = true;
  
      this.licenseService.get(this.licenseId).subscribe(data => {
        this.license = data['data'];
      });
  
      this.licenseService.getUsers(this.licenseId).subscribe(data => {
        this.users = data['data'];
      });
  
      this.loadEmployeesData();
      this.loadTagsData();
  
      this.searchEmployeeForm = this.formBuilder.group({
        search: ['', Validators.required]
      });
  
      this.searchEmployeeForm.controls['search'].valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged()).subscribe(value => {
          this.searchEmployee = value;
          this.currentPage = 0;
          this.loadEmployeesData();
      });
  
      this.tagsForm = this.formBuilder.group({
        search: ['', Validators.required]
      });
  
      this.tagsForm.controls['search'].valueChanges.pipe(
        debounceTime(500),
        distinctUntilChanged()).subscribe(value => {
          this.tagsSearch = value;
          this.tagsOffset = 0;
          this.loadTagsData();
      });
  
    }
    else{
      window.location.href = '/login';
    }
    //-------------------------------

  }

  loadEmployeesData() {
    this.searchEmployeeService.searchEmployees(this.currentPage, this.searchEmployee).subscribe(data => {
      this.moreResultsEmployees = data['meta']['more'];
      this.employees = data['query'];
    });
  }

  loadTagsData() {
    this.licenseService.searchAssetProduct( {
      limit: this.tagsLimit,
      offset: this.tagsOffset,
      text: this.tagsSearch
    }).subscribe(data => {
      this.tagsMoreResults = data['meta']['more'];
      this.tags = data['query'];
    });
  }

  selectEmployee(employee: any) {
    this.employee = employee;
  }

  selectTag(tag: any) {
    this.tag = tag;
  }

  previousEmployees() {
    this.currentPage = this.currentPage - 10;
    this.loadEmployeesData();
  }

  nextEmployees() {
    this.currentPage = this.currentPage + 10;
    this.loadEmployeesData();
  }

  previousTags() {
    this.tagsOffset = this.tagsOffset - this.tagsLimit;
    this.loadTagsData();
  }

  nextTags() {
    this.tagsOffset = this.tagsOffset + this.tagsLimit;
    this.loadTagsData();
  }

  save() {
    if (!this.employee['EMAIL'] || !this.tag['assettag']) {
      alert('Not saved. Selected invalid user or tag');
      return;
    }

    const assign = {
      'id_license': this.licenseId,
      'usuario': this.employee['EMAIL'],
      'tag': this.tag['assettag'],
      'enable': 1
    };

    this.licenseService.assign(assign).subscribe(data => {
      this.employee = undefined;
      this.tag = undefined;

      this.users.push(data['data']);
    });
  }

  remove(user: any) {
    this.licenseService.disableUser(user['id_relationship'], {enable: 0}).subscribe(data => {
      this.users = this.users.filter(element => {
        return element['id_relationship'] !== data['data']['id_relationship'];
      });
    });
  };

  validate(): boolean {
    const finded = this.users.find(element => {
      return element['usuario'] === this.employee['EMAIL'] && element['tag'] === this.tag['assettag'];
    });
    return finded === undefined;
  }

}
