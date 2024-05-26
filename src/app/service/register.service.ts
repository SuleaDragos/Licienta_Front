import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../model/register-request';
import { Observable, map } from 'rxjs';
import { ApiUrl } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }
  register(registerRequest: RegisterRequest): Observable<any> {
    return this.http.post(ApiUrl.value + 'auth/register', registerRequest).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
