import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { ApiUrl } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(ApiUrl.value + 'user/all');
  }

  getUserByEmail(email: string) {
    return this.http.get<User>(ApiUrl.value + 'user/' + email)
  }
}
