import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
    @Input() currentUserEmail!: string | undefined;

    constructor(private router: Router){}
    ngOnInit(): void {
      console.log(this.currentUserEmail);
    }

    singOutCurrentAccount(): void {
      this.router.navigate(['/signin']);
    }
}
