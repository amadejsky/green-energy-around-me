import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { chargerInfo } from '../../shared/charger-info';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent implements OnInit, OnChanges {
  @Input('charger') charger: chargerInfo = new chargerInfo({});
  private readonly API_KEY = 'AIzaSyDLnvxkRz2M4zycxrM4tysqt4L99Uf_vVA';
  mapUrl: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    console.log('ng init of details '+this.charger.AddressInfo);
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (this.charger?.AddressInfo?.Latitude && this.charger?.AddressInfo?.Longitude) {
      const url = `https://www.google.com/maps/embed/v1/place?q=${this.charger.AddressInfo.Latitude},${this.charger.AddressInfo.Longitude}&key=${this.API_KEY}`;
      this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }
  
  




}
