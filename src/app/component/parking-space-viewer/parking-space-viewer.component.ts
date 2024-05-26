import { Component, OnInit } from '@angular/core';
import { ParkingSpace } from 'src/app/model/parking-space';
import { ParkingSpaceServiceService } from 'src/app/service/parking-space-service.service';

@Component({
  selector: 'app-parking-space-viewer',
  templateUrl: './parking-space-viewer.component.html',
  styleUrls: ['./parking-space-viewer.component.scss']
})
export class ParkingSpaceViewerComponent implements OnInit {
  parkingSpaces: ParkingSpace[] = [];
  constructor(private parkingSpaceService: ParkingSpaceServiceService){}
  ngOnInit(): void {
    this.parkingSpaceService.getAllParkingSpaces().subscribe({
      next: (spaces: ParkingSpace[]) => {
        this.parkingSpaces = spaces;

      }
    })
  }
}
