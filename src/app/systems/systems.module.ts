import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemListComponent } from './system-list/system-list.component';
import { SystemDetailComponent } from './system-detail/system-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SystemListComponent, SystemDetailComponent],
  providers: [  ]
})
export class SystemsModule { }
