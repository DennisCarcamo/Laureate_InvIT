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
  h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: "Segoe UI",Arial,sans-serif;
  }

  h3 {
    display: block;
    font-size: 1.8em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    font-family: "Segoe UI",Arial,sans-serif;
  }
  .EdgeButton:hover{
    background-color: #E0F8FF;
  }

  .EdgeButton--secondary-file:hover{
      background-color: #afe0ff;
  }

  .EdgeButton--secondaryii:hover{
      background-color: #E0F8FF;
      color: #1da1f2;
  }

  .EdgeButton--secondaryiii:hover{
      background-color: #DBFCE8;
      /*color: #69C68E;*/
  }



  /*input {
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      margin-top: 12px;
      width: 100%;
  } */


  .EdgeButton--secondary {
      background-color: #fff;
      border: 1px solid #1da1f2;
      color: #1da1f2;
  }

  .EdgeButton--secondaryii {
      background-color: #1da1f2;
      border: 1px solid #fff;
      color: #fff;
  
  }

  .EdgeButton--secondaryiii {
      background-color: #fff;
      border: 1px solid #69C68E;
      color: #69C68E;
  
  }



  .EdgeButton--secondary-file {
      background-color: #1da1f2;
      border: 1px solid #fff;
      color: #fff;
  }



  .EdgeButton--medium {
      font-size: 14px;
      line-height: 20px;
      padding: 6px 16px;
  }

  /*.EdgeButton, .EdgeButton:visited {
      border-radius: 100px;
      box-shadow: none;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
      line-height: 20px;
      padding: 6px 16px;
      position: relative;
      text-align: center;
      white-space: nowrap;
  }*/

  .EdgeButton {
      border-radius: 100px;
      box-shadow: none;
      cursor: pointer;
      font-size: 18px;
      font-weight: bold;
      line-height: 25px;
      padding: 8px 18px;
      position: relative;
      text-align: center;
      white-space: nowrap;
  }

  .EdgeButton--secondaryii {
      border-radius: 100px;
      box-shadow: none;
      cursor: pointer;
      font-size: 14px;
      line-height: 20px;
      padding: 6px 16px;
      position: relative;
      text-align: center;
      white-space: nowrap;
  }

  .EdgeButton--secondaryiii {
      border-radius: 100px;
      box-shadow: none;
      cursor: pointer;
      font-size: 14px;
      line-height: 20px;
      padding: 6px 16px;
      position: relative;
      text-align: center;
      white-space: nowrap;
  }

  .table-head {
    background-color: rgb(35, 47, 62);
    border-color: rgb(35, 47, 62);
    color: #fff;
  }

  p, label, option{
    font-size: 1em;
    font-family: "Segoe UI",Arial,sans-serif;
    color: rgb(101, 119, 134);
  }

  option, select{
    font-size: 0.9em;
    font-family: "Segoe UI",Arial,sans-serif;
    color: rgb(101, 119, 134);
  }

  `]
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

  public messegeError = 'More information required';


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
      //this.privilege = true;
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

 /* deleteRole(){
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

  } */

  deleteRole(){
    if(!this.users2[0]){
      this.boolroles = false;
      this.boolemployee = false;
      this. boolassign = false;
      this.managment.getSystemUsers()
      .subscribe(res => {
        this.boolDelete = true;
        this.users = res['p'];
        for (let item of this.users){
          this.users2.push(item['privilege']);
        }
      })
    }
    else{
      this.boolroles = false;
      this.boolemployee = false;
      this.boolDelete = true;
      this. boolassign = false;
    }
    

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
      //alert('Select employee first');
      this.messegeError = "Select employee first";
      document.getElementById("modalError").click();
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
      //alert("Select a Role first");
      this.messegeError = "Select a Role First";
      document.getElementById("modalError").click();
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
        //this.messegeError = "User Correctly inserted";
        //document.getElementById("modalError").click();
        window.location.href = '/admin';

      }else{
        //alert('Wrong User try again');
        this.messegeError = "Invalid user, check email in the Active Directory and that is not a duplicate user";
        document.getElementById("modalError").click();
        //window.location.href = '/admin';
      }
    })

  }

  createRole(){
    this.boolemployee = false;
    this.boolroles = true;
    this.boolDelete = false;
    this.boolassign = false;
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

  /*confirmRolePrivileges(){
    if(this.newRoleName){
      this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
      .subscribe(res =>{
        if(res['message'] == 'Items correctly inserted'){
          //alert('Items correctly inserted');
          this.messegeError = "Items correctly inserted";
          document.getElementById("modalError").click();
          window.location.href = '/admin';
        }else{
          console.log(res);
        }
      })

    }else{
      //alert('Set a Role name first.!');
      this.messegeError = "Set a Role name first";
      document.getElementById("modalError").click();
    }
  }*/

  confirmRolePrivileges(){
    if(this.newRoleName && this.droppedItems[0]){
      //alert("Baia Baia");
      //console.log(this.droppedItems);
      //alert();
      this.managment.postNewRolePrivileges(this.newRoleName, this.droppedItems)
      .subscribe(res =>{
        if(res['message'] == 'Items correctly inserted'){
          alert('Items correctly inserted');
          //this.messegeError = "Items correctly inserted";
          //document.getElementById("modalError").click();
          window.location.href = '/admin';
        }else{
          console.log(res);
        }
      })

    }else{
      //alert('Set a Role name first.!');
      console.log(this.droppedItems);
      this.messegeError = "Set a Role name first and at least one Privilege";
      document.getElementById("modalError").click();
    }
  }

  removeUser(template: TemplateRef<any>){
    let x = this.selectedUser[0];
    if(x){
      this.modalRef = this.modalService.show(template);

    }else{
      //alert('Select an User.!');
      this.messegeError = "Select an user";
      document.getElementById("modalError").click();
    }
  }

  confirmDeleteUser(){
    let x = this.selectedUser[0];
    this.managment.deleteUser(x.USER_NAME, x.ID)
    .subscribe(res => {
      if(res['message'] == 'superuser'){
        alert('Cant Remove this user');
        //this.messegeError = "Can't Remove this user";
        //document.getElementById("modalError").click();
        window.location.href = '/admin';
      }

      if(res['message'] == 'wrong'){
        alert('Something Wrong try again');
        //this.messegeError = "Something wrong try again";
        //document.getElementById("modalError").click();
        window.location.href = '/admin';
      }

      if(res['message'] == 'done'){
        alert('User removed.!');
        //this.messegeError = "User Removed.!";
        //document.getElementById("modalError").click();
        window.location.href = '/admin';
      }
    })
  }

  openErrorTemplate(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    document.getElementById('errorMessage').innerHTML = this.messegeError;
  }
}
