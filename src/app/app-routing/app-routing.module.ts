import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinkListComponent } from '../links/link-list/link-list.component';
import { SystemListComponent } from '../systems/system-list/system-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/links', pathMatch: 'full' },
  { path: 'links',  component: LinkListComponent },
  { path: 'systems',  component: SystemListComponent },
  { path: 'weather', loadChildren: '../weather/weather.module#WeatherModule'},
  { path: 'currency', loadChildren: '../currency/currency.module#CurrencyModule'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  	RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
