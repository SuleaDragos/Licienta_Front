import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../api-url';
import { ParkingSpace } from '../model/parking-space';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceServiceService {

  constructor(private http: HttpClient) { }

  getAllParkingSpaces(): Observable<ParkingSpace[]> {
    return this.http.get<ParkingSpace[]>(ApiUrl.value + 'parkingSpace/all');
  }
}
