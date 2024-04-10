import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selectedMenu = new EventEmitter<string>();
  constructor(private router: Router){}
  selectedApp(){
    this.selectedMenu.emit("App");
  }

  selectedAbout(){
    this.selectedMenu.emit("About");
  }

  // refreshPage(): void {
  //   this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
  //     this.router.navigate([this.router.url]);
  //   });
  // }

}
