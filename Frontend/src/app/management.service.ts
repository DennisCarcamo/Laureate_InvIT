import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { element } from 'protractor';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagementService {

  constructor(private httpClient:HttpClient) { }

  test(){
    return 'baia baia'
  }

  getRoles(){
    return this.httpClient.get(`http://hnlnoinvitqa.hnsc.net/api/v1/roles`).map(result => result);
  }

  getPrivilegesbyRoles(role){
    return this.httpClient.get(`http://hnlnoinvitqa.hnsc.net/api/v1/roles_x_privileges/${role}`).map(result => result);
  }

  postUseradmin(email, rol){
    return this.httpClient.post(`http://hnlnoinvitqa.hnsc.net/api/v1/usersadmins`,{
      'user_name': email,
      'id_role': rol
    }).map(result => result);
  }

  postNewRolePrivileges(name, privileges_){
    return this.httpClient.post(`http://hnlnoinvitqa.hnsc.net/api/v1/roles`, {
      'rol_name': name,
      'privileges': JSON.stringify(privileges_)
    }).map(result => result);
  }

  getSystemUsers(){
    return this.httpClient.get(`http://hnlnoinvitqa.hnsc.net/api/v1/usersadmins`).map(result => result);
  }

  deleteUser(user_name, id){
    return this.httpClient.put(`http://hnlnoinvitqa.hnsc.net/api/v1/usersadmins`, {
     'user_name': user_name,
     'id_role': id

    }).map(result => result);
  }
}
