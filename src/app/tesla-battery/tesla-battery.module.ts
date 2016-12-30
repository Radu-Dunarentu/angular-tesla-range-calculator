/**
 * Created by Radu on 12/30/2016.
 */
/*
 * tesla-battery.module.ts
 */
// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import { BatteryService } from './tesla-battery.service';

@NgModule({
  declarations: [
    // registering our container component
    TeslaBatteryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    // add the service to our sub-module
    BatteryService
  ],
  exports: []
})
export class TeslaBatteryModule {}
