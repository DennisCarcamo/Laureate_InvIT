import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { SearchEmployeeService } from '../../create-signature-sheet/search-employee.service';
import { LicenseService } from '../services/license.service';


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
  search: string;
  moreResults: boolean;
  isEmployeeCollapsed: boolean;
  isTagCollapsed: boolean;
  licenseId: number;
  license: any;
  users: any[];

  searchForm: FormGroup;

  constructor(
    private licenseService: LicenseService,
    private searchEmployeeService: SearchEmployeeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.tags = [
      {
        'TAG_ID': '1',
        'TAG': 'sdff-847-efd'
      },
      {
        'TAG_ID': '2',
        'TAG': 'g5d-7ggg7-0odfd'
      },
      {
        'TAG_ID': '3',
        'TAG': 'sadss-08-sadasd89'
      }
    ];
    this.licenseId = this.route.snapshot.params['licenseId'];
    this.isEmployeeCollapsed = false;
    this.isTagCollapsed = true;
    this.moreResults = true;
    this.currentPage = 0;
    this.search = '';

    this.licenseService.get(this.licenseId).subscribe(data => {
      this.license = data['data'];
    });

    this.licenseService.getUsers(this.licenseId).subscribe(data => {
      this.users = data['data'];
    });

    this.loadData();

    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });

    this.searchForm.controls['search'].valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()).subscribe(value => {
        this.search = value;
        this.currentPage = 0;
        this.loadData();
    });

  }

  loadData() {
    this.searchEmployeeService.searchEmployees(this.currentPage, this.search).subscribe(data => {
      this.moreResults = data['meta']['more'];
      this.employees = data['query'];
    });
  }

  selectEmployee(employee: any) {
    this.employee = employee;
    this.tag = undefined;
  }

  selectTag(tag: any) {
    this.tag = tag;
  }

  previous() {
    this.currentPage = this.currentPage - 10;
    this.loadData();
  }

  next() {
    this.currentPage = this.currentPage + 10;
    this.loadData();
  }

  save() {
    if (!this.employee['EMAIL'] || !this.tag['TAG']) {
      alert('Not saved. Selected invalid user or tag');
      return;
    }

    const assign = {
      'id_license': this.licenseId,
      'usuario': this.employee['EMAIL'],
      'tag': this.tag['TAG'],
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
      return element['usuario'] === this.employee['EMAIL'] && element['tag'] === this.tag['TAG'];
    });
    return finded === undefined;
  }

}
