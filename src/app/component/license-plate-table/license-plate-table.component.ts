import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { LicensePlate } from 'src/app/model/license-plate';
import { User } from 'src/app/model/user';
import { LicensePlateServiceService } from 'src/app/service/license-plate-service.service';
import { validateCode, validateNumber } from 'src/app/validator';

@Component({
  selector: 'app-license-plate-table',
  templateUrl: './license-plate-table.component.html',
  styleUrls: ['./license-plate-table.component.scss']
})
export class LicensePlateTableComponent implements OnInit{
  judeteList!: any[];
  licensePlateFormGroup!: FormGroup;
  formBuilder!:FormBuilder;
  licensePlates: LicensePlate[] = [];
  creationDialogVisible: boolean = false;
  minDate: Date = new Date();
  constructor(private licensePlateService: LicensePlateServiceService, private router: Router){ }
  @Input() currentUser!: User;

  ngOnInit(): void {
    this.judeteList = [
      {label: "Alba", value: "AB"},
      {label: "Arad", value: "AR"},
      {label: "Argeș", value: "AG"},
      {label: "Bacău", value: "BC"},
      {label: "Bihor", value: "BH"},
      {label: "Bistrița-Năsăud", value: "BN"},
      {label: "Botoșani", value: "BT"},
      {label: "Brăila", value: "BR"},
      {label: "Brașov", value: "BV"},
      {label: "București", value: "B"},
      {label: "Buzău", value: "BZ"},
      {label: "Călărași", value: "CL"},
      {label: "Caraș-Severin", value: "CS"},
      {label: "Cluj", value: "CJ"},
      {label: "Constanța", value: "CT"},
      {label: "Covasna", value: "CV"},
      {label: "Dâmbovița", value: "DB"},
      {label: "Dolj", value: "DJ"},
      {label: "Galați", value: "GL"},
      {label: "Giurgiu", value: "GJ"},
      {label: "Harghita", value: "HR"},
      {label: "Hunedoara", value: "HD"},
      {label: "Ialomița", value: "IL"},
      {label: "Iași", value: "IS"},
      {label: "Ilfov", value: "IF"},
      {label: "Maramureș", value: "MM"},
      {label: "Mehedinți", value: "MH"},
      {label: "Mureș", value: "MS"},
      {label: "Neamț", value: "NT"},
      {label: "Olt", value: "OT"},
      {label: "Prahova", value: "PH"},
      {label: "Sălaj", value: "SJ"},
      {label: "Satu Mar", value: "SM"},
      {label: "Sibiu", value: "SB"},
      {label: "Suceava", value: "SV"},
      {label: "Teleorman", value: "TR"},
      {label: "Timiș", value: "TM"},
      {label: "Tulcea", value: "TL"},
      {label: "Vâlcea", value: "VL"},
      {label: "Vaslui", value: "VS"},
      {label: "Vrancea", value: "VN"}
    ];
    if(this.currentUser.id){
      this.licensePlateService.getLicensePlateByUser(this.currentUser.id).subscribe({
        next: (plates: LicensePlate[]) =>{
          this.licensePlates = plates;
        }
    });
    }
    this.licensePlateFormGroup = new FormGroup({
      place: new FormControl("", Validators.required),
      number: new FormControl("", [validateNumber as ValidatorFn]),
      code: new FormControl("", [validateCode as ValidatorFn]),
      value: new FormControl(""),
      creationDate: new FormControl(new Date()),
      expirationDate: new FormControl("",[Validators.required]),
      userId: new FormControl(this.currentUser.id),
      type: new FormControl("")
    });
  }
  removePlateFromList(id: number): void {
    console.log(id);
    this.licensePlateService.deleteLicensePlate(id).subscribe({
      next:(respone: any) =>{
        console.log(respone);
        if(this.currentUser.id)
          this.licensePlateService.getLicensePlateByUser(this.currentUser.id).subscribe({
          next: (plates: LicensePlate[]) =>{
            this.licensePlates = plates;
          }
      });
      }
    })
  }  
  showDialog(): void {
    this.creationDialogVisible = true;
}
  saveLicensePlate(): void{
    if(this.licensePlateFormGroup.valid){
      this.licensePlateService.addLicensePlate(this.licensePlateFormGroup.value).subscribe({
        next:(response: any) => {
          console.log(response);
          if(this.currentUser.id)
            this.licensePlateService.getLicensePlateByUser(this.currentUser.id).subscribe({
            next: (plates: LicensePlate[]) =>{
              this.licensePlates = plates;
            }
        });
      }
      });
      this.creationDialogVisible = false;
    }
    
  }
  toParkingSpaceViewer(): void{
    this.router.navigate(['/parkingspaceviewer']);
  }
}

