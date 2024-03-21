import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { chargerInfo } from '../../shared/charger-info';

@Component({
  selector: 'app-green-energy',
  templateUrl: './green-energy.component.html',
  styleUrls: ['./green-energy.component.css']
})
export class GreenEnergyComponent implements OnInit {
  apiKey = 'c32f8e59-8a86-4483-a54a-40c05ec5a237';
  chargers: chargerInfo[] = [];
  inputLatitude = 0;
  inputLongitude = 0;
  inputRadius = 0;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    const latitude = 52.2297; // wwa
    const longitude = 21.0122; // wwa
    const radius = 25;  

    const apiUrl = `https://api.openchargemap.io/v3/poi/?output=json&key=${this.apiKey}&latitude=${latitude}&longitude=${longitude}&distance=${radius}`;

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

  search() {
    console.log(this.inputLatitude, this.inputLongitude, this.inputRadius);
    const apiUrl = `https://api.openchargemap.io/v3/poi/?output=json&key=${this.apiKey}&latitude=${this.inputLatitude}&longitude=${this.inputLongitude}&distance=${this.inputRadius}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.chargers = []; // Clear previous data
      data.forEach((chargerData: any) => {
        const charger = new chargerInfo(chargerData);
        this.chargers.push(charger);
      });
      console.log(data);
      console.log(this.chargers);
      console.log(this.chargers[0]);

      // Potrzebne jest odświeżenie widoku po otrzymaniu nowych danych
      this.cdr.detectChanges();
    }, (error: any) => {
      console.error('There was an error:', error);
    });
  }
}
