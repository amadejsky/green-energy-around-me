import { Component, Input } from '@angular/core';
import { chargerInfo } from '../../shared/charger-info';

@Component({
  selector: 'app-charger',
  templateUrl: './charger.component.html',
  styleUrl: './charger.component.css'
})
export class ChargerComponent {
  @Input('charger') charger: chargerInfo = new chargerInfo({});

  getDetails(){
    console.log('I ll show you the details from: '+this.charger.AddressInfo);
  }

}
