import { Injectable } from '@angular/core';

const TOKEN='AuthToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(){
    return localStorage.getItem(TOKEN) != null;    
  }

  static getToken(){
    return localStorage.getItem(TOKEN);
  }

  setToken(token:string){
    localStorage.setItem(TOKEN, token);
  }

  logout(){
    localStorage.removeItem(TOKEN);
  }
}
