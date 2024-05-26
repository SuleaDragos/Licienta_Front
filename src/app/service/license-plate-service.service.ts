import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LicensePlate } from '../model/license-plate';
import { Observable, catchError } from 'rxjs';
import { ApiUrl } from '../api-url';

@Injectable({
  providedIn: 'root'
})
export class LicensePlateServiceService {
  constructor(private http: HttpClient) { }

  addLicensePlate(licensePlate: LicensePlate): Observable<LicensePlate> {
    return this.http.post<LicensePlate>(ApiUrl.value + 'licensePlate', licensePlate);
  }

  getLicensePlateByUser(userId: number): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>(ApiUrl.value + 'licensePlate/' + userId);
  }

  deleteLicensePlate(plateId: number): Observable<any> {
    return this.http.delete(ApiUrl.value + 'licensePlate/' + plateId);
  }

  getAllLicensePlates(): Observable<LicensePlate[]> {
    return this.http.get<LicensePlate[]>(ApiUrl.value + 'licensePlate/all');
  }

}
