import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { chargerInfo } from '../../shared/charger-info';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrl: './place-details.component.css'
})
export class PlaceDetailsComponent implements OnInit, OnChanges {
  @Input('charger') charger: chargerInfo = new chargerInfo({});
  private readonly GOOGLE_MAPS_API_KEY = 'AIzaSyDLnvxkRz2M4zycxrM4tysqt4L99Uf_vVA';

  ngOnInit(): void {
    console.log('ng init of details '+this.charger.AddressInfo);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('details change! '+this.charger.AddressInfo);
  }
  



}
