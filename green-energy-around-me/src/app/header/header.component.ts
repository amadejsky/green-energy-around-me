import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selectedMenu = new EventEmitter<string>();

  selectedApp(){
    this.selectedMenu.emit("App");
  }

  selectedAbout(){
    this.selectedMenu.emit("About");
  }

}
