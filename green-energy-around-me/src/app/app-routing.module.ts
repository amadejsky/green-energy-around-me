import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GreenEnergyComponent } from './green-energy/green-energy.component';
import { AboutComponent } from './about/about.component';
import { SomethingWrongComponent } from './something-wrong/something-wrong.component';


const appRoutes: Routes = [
  { path: '', component: AboutComponent, pathMatch: 'full'},
  { path: 'app', component: GreenEnergyComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: SomethingWrongComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


