import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GreenEnergyComponent } from './green-energy/green-energy.component';
import { HttpClientModule } from '@angular/common/http';
import { ChargerComponent } from './charger/charger.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreenEnergyComponent,
    ChargerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
