/**
 * Created by Radu on 12/30/2016.
 */
/*
 * tesla-battery.component.ts
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'tesla-battery',
  template: `
    <form class="tesla-battery" [formGroup]="tesla">
      <h1>{{ title }}</h1>
      <div class="tesla-battery__notice">
        <p>
          The actual amount of range that you experience will vary based 
          on your particular use conditions. See how particular use conditions 
          may affect your range in our simulation model.
        </p>
        <p>
          Vehicle range may vary depending on the vehicle configuration, 
          battery age and condition, driving style and operating, environmental 
          and climate conditions.
        </p>
      </div>
    </form>
  `,
  styles: [`
  .tesla-battery {
  width: 1050px;
  margin: 0 auto;
  h1 {
    font-family: 'RobotoNormal';
    font-weight: 100;
    font-size: 38px;
    text-align: center;
    letter-spacing: 3px;
  }
  &__notice {
    margin: 20px 0;
    font-size: 15px;
    color: #666;
    line-height: 20px;
  }
}
.tesla-climate {
  float: left;
  width: 420px;
  padding: 0 40px;
  margin: 0 40px 0 0;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}
.tesla-controls {
  display: block;
  width: 100%;
}

`]
})
export class TeslaBatteryComponent implements OnInit {

  title: string = 'Range Per Charge';
  tesla: FormGroup;

  constructor(public fb: FormBuilder) {}

  ngOnInit() {
    this.tesla = this.fb.group({
      config: this.fb.group({
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      })
    });
  }

}
