import { Component, OnInit } from '@angular/core';
import {ManagementService} from '../management.service';
import {NgForm} from '@angular/forms';

import { TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { CookieService } from 'ngx-cookie-service';
import * as jwt_decode from 'jwt-decode';



@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styles: [`
  div.scroll-list {
    overflow: auto;
    max-height: 70vh;
  }

  .drag-over {
    border: #ff525b dashed 2px;
  }

  .drag-hint {
    border: #ffc100 dashed 2px;
  }

  .drag-target-border {
    border: #00bfff dashed 2px;
  }

  .drag-target-border-green {
    border: #3c763d dashed 2px;
  }
`
]
})
export class UserAdminComponent implements OnInit {
  public boolproducts:any = false;
  public boolready:any = false;
  public boolDelete = false;
  public boolfirst:any = false;
  public boolemployee = false;
  public selectemploye:any = [];
  public boolroles = false;
  public boolassign = false;
  public option;
  public roles = [];
  modalRef: BsModalRef;
  public privilegesxrol = [];
  val = 500
  public fruits;
  public newRoleName;
  public privilege = false;
  public users = [];
  public users2 = [];
  public selectedUser = [];


  vegetables = [
    {name: 'Dashboard', type: 'vegetable'},
    {name: 'Create Signature Sheet', type: 'vegetable'},
    {name: 'PDF', type: 'vegetable'},
    {name: 'Update Signature Sheet', type: 'vegetable'},
    {name: 'Offboarding-loan admin', type: 'vegetable'},
    {name: 'Reports', type: 'vegetable'},
    {name: 'User Management', type: 'vegetable'},
    
  ];


  droppedFruits = [];
  droppedVegetables = [];
  droppedItems = [];
  fruitDropEnabled = true;
  dragEnabled = true;

  constructor(private managment : ManagementService, private modalService: BsModalService, private cookieService: CookieService) { }

  ngOnInit() {
    let val = this.cookieService.get("token");
    if(val){

      let djtw = jwt_decode(val);
      let identity = djtw['identity'];
      for (var _i = 0; _i < identity.length; _i++) {
        if(identity[_i]['privilege'] == 'user_management' ){
          this.privilege = true;
        }
      }
  
      if(this.privilege){
  
      }
      else{
        window.location.href = '/login';
      }
    }
    else{
      window.location.href = '/login';
    }

  }

  isDropAllowed = (dragData: any) => {
    return dragData > this.val;
  }

  start(){
    this.boolfirst = false;
    this.boolemployee = true;
    this.boolready = false;
    this.boolproducts = false;
    this.boolroles = false;
    this.boolDelete = false;
  }

  deleteRole(){
    this.boolroles = false;
    this.boolemployee = false;
    this.managment.getSystemUsers()
    .subscribe(res => {
      this.boolDelete = true;
      this.users = res['p'];
      for (let item of this.users){
        this.users2.push(item['privilege']);
      }
      console.log(this.users);
      console.log(this.users2);

    })

  }

  continueroles(){
    let x = this.selectemploye[0];
    if(x){
      this.managment.getRoles()
      .subscribe(res => {
        this.roles = res['Roles'];
      })
      this.boolemployee = false;
      this.boolassign = true;

    }else{
      alert('Select employee first');
    }
  }

  test(){
    console.log(this.newRoleName);
  }

  onSelect(selectedItem: any){
    let x = {
     'ID': selectedItem.id,
     'USER_NAME': selectedItem.name,
     'ROLE': selectedItem.rol,
     
     };
     //this.selectedUser = x;

     this.selectedUser.splice(0);
     console.log(x);
     this.selectedUser.push(x);

  }

  openModal(template: TemplateRef<any>) {
    //let x = this.selectemploye[0];
    if(this.option != "" && this.option){
      this.managment.getPrivilegesbyRoles(this.option).subscribe(res => {
        console.log(res);
        this.privilegesxrol = res['p'];
        this.modalRef = this.modalService.show(template);
      })
    }
    else{
      alert("Select a Role first");
      //this.confirmation = true;
      //alert("The employee does not have Employee Id, please make sure to get all the info ready before proceding");
    }
    
  }

  abort(){
    window.location.href = '/admin';
  }
  
  confirm(){
    let x = this.selectemploye[0]
    this.managment.postUseradmin(x.EMAIL, this.option).subscribe(res=>{
      if(res['message']== 'Item correctly inserted'){
        alert('User Correctly inserted');
        window.location.href = '/admin';

      }else{
        alert('Wrong User try again');
        window.location.href = '/admin';
      }
    })

  }

  createRole(){
    this.boolemployee = false;
    this.boolroles = true;
    this.boolDelete = false;
  }

  /*updateCheck(e){
    if(e.target.checked){
      this.checkedUpdate = true
    }
    else{
      this.checkedUpdate = false;
    }
  }*/

  openRoleModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }



  onFruitDrop(e: any) {
    this.droppedFruits.push(e.dragData);
    this.removeItem(e.dragData, this.fruits);
  } 

  onVegetableDrop(e: any) {
    this.droppedVegetables.push(e.dragData);
    this.removeItem(e.dragData, this.vegetables);
  }

  onAnyDrop(e: any) {
    this.droppedItems.push(e.dragData);

    if (e.dragData.type === 'vegetable') {
      this.removeItem(e.dragData, this.vegetables);
    } else {
      this.removeItem(e.dragData, this.fruits);
    }
  }

  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }

  confirmRolePrivileges(){
    if(this.newRoleName){
      this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
      .subscribe(res =>{
        if(res['message'] == 'Items correctly inserted'){
          alert('Items correctly inserted');
          window.location.href = '/admin';
        }else{
          console.log(res);
        }
      })

    }else{
      alert('Set a Role name first.!');
    }
  }

  removeUser(template: TemplateRef<any>){
    let x = this.selectedUser[0];
    if(x){
      this.modalRef = this.modalService.show(template);

    }else{
      alert('Select an User.!');
    }
  }

  confirmDeleteUser(){
    let x = this.selectedUser[0];
    this.managment.deleteUser(x.USER_NAME, x.ID)
    .subscribe(res => {
      if(res['message'] == 'superuser'){
        alert('Cant Remove this user');
        window.location.href = '/admin';
      }

      if(res['message'] == 'wrong'){
        alert('Something Wrong try again');
        window.location.href = '/admin';
      }

      if(res['message'] == 'done'){
        alert('User removed.!');
        window.location.href = '/admin';
      }
    })
  }
}
