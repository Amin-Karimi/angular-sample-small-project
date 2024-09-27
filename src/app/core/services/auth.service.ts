import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = ''
  constructor() { }

  userIsLogin(): boolean {
    return true
  }

  setToken(token: string) {
    this.token = token
  }
}
