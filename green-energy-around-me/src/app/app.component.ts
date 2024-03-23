import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAppSelected: boolean = false;
  isAboutSelected: boolean = true;
  title = 'green-energy-around-me';

  processSelectedMenu($event: string){
    if($event === "About"){
      this.isAboutSelected=true;
      this.isAppSelected=false;
      console.log($event);
    }else{
      this.isAboutSelected=false;
      this.isAppSelected=true;
      console.log($event);
    }
  }

}
