import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LicensePlate } from 'src/app/model/license-plate';

@Component({
  selector: 'app-representation-license-plate',
  templateUrl: './representation-license-plate.component.html',
  styleUrls: ['./representation-license-plate.component.scss']
})
export class RepresentationLicensePlateComponent implements OnInit {
  @Input() licensePlate!: LicensePlate;
  @Output() onDelete = new EventEmitter<any>();
  creationDateOnly!: String;
  expirationDateOnly!: String;

  ngOnInit(): void {
    if (this.licensePlate.creationDate){
      const creationdate = this.licensePlate.creationDate;
      this.creationDateOnly = new Date(creationdate).toLocaleDateString("en-GB");
    }
    if (this.licensePlate.expirationDate){
      const expirationdate = this.licensePlate.expirationDate;
      this.expirationDateOnly = new Date(expirationdate).toLocaleDateString("en-GB");
  }
  }
  deleteLicensePlate(): void {
    this.onDelete.emit(this.licensePlate.id);
  }
}
