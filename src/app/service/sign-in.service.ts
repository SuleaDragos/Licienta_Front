import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignInRequest } from '../model/sign-in-request';
import { Observable, map } from 'rxjs';
import * as jwtDecode from 'jwt-decode';
import { ApiUrl } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  constructor(private http: HttpClient) { }

  signIn(signInRequest: SignInRequest): Observable<any> {
    return this.http.post(ApiUrl.value + 'auth/signin', signInRequest).pipe(
      map((response: any) => {
        if (response && response.jwtToken) {
          localStorage.setItem('jwtToken', response.jwtToken);
        }
        return response;
      })
    );
  }

  getCurrentUserEmail(): string | null {
    const token = localStorage.getItem('jwtToken');
    if (!token) return null;
    try {
      const decodedToken = jwtDecode.jwtDecode<any>(token);
      return decodedToken.sub;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
}

