import { Component } from '@angular/core'

@Component({
  selector: 'inventory-app',
  template: `
      <nav-bar></nav-bar>
      <!--<angular2-fullcalendar [options]="calendarOptions"></angular2-fullcalendar>-->
      <router-outlet></router-outlet>`
})
export class InventoryAppComponent {

}