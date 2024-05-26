import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { User } from 'src/app/model/user';
import { SignInService } from 'src/app/service/sign-in.service';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  currentUser!: User;
  currentUserEmail!: string;
  constructor(private userService: UserServiceService, private signInService: SignInService) {}
  ngOnInit(): void {
    const email = this.signInService.getCurrentUserEmail();
    if(email){
      this.currentUserEmail = email;
      this.userService.getUserByEmail(this.currentUserEmail).subscribe({
        next: (user: User) =>{
            this.currentUser = new User(user);
        }
      })
    }
  }

}
