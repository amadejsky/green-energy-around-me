import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { chargerInfo } from '../../shared/charger-info';

@Component({
  selector: 'app-green-energy',
  templateUrl: './green-energy.component.html',
  styleUrl: './green-energy.component.css'
})
export class GreenEnergyComponent implements OnInit {
  chargers: chargerInfo[] = [];

  constructor(private http: HttpClient) {}


  ngOnInit(){
    const apiKey = 'c32f8e59-8a86-4483-a54a-40c05ec5a237';
    const latitude = 52.2297; // wwa
    const longitude = 21.0122; // wwa
    const distance = 25;  
   

    const apiUrl = `https://api.openchargemap.io/v3/poi/?output=json&key=${apiKey}&latitude=${latitude}&longitude=${longitude}&distance=${distance}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      data.forEach((chargerData: any) => {
        const charger = new chargerInfo(chargerData);
        this.chargers.push(charger);
      });
      console.log(data);
      console.log(this.chargers);
      console.log(this.chargers[0]);
    }, (error: any) => {
      console.error('There was an error:', error);
    });
  }
}


