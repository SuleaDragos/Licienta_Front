import { Component, OnInit } from '@angular/core';
import { LicensePlate } from 'src/app/model/license-plate';
import { User } from 'src/app/model/user';
import { LicensePlateServiceService } from 'src/app/service/license-plate-service.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{
  ADMIN: string | undefined = "ADMINISTRATOR";
  users!: User[];
  licensePlates!: LicensePlate[];
  constructor(private userService: UserServiceService, private licensePlateService: LicensePlateServiceService){}
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (users: User[]) =>{
        this.users = users;
    }
    })
  }
  licensePlateforUser(user:User): LicensePlate[]{
    if(user.id){
      this.licensePlateService.getLicensePlateByUser(user.id).subscribe({
        next: (licensePlates: LicensePlate[]) =>{
          this.licensePlates = licensePlates;
      }
      })
    }
    return this.licensePlates;
  }
}
