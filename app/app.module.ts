import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from "@angular/router"
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {
    InventoryListComponent,
    InventoryThumbnailComponent,
    InventoryService,
    InventoryDetailsComponent,
    CreateInventoryComponent,
    InventoryRouteActivator,
    InventoryListResolver,
    CreateContractComponent,
    ContractListComponent,
    UpvoteComponent,
    VoterService,
    DurationPipe
} from './inventory/index'
import { InputTextModule, ButtonModule, ConfirmDialogModule } from 'primeng/primeng';
import { InventoryAppComponent } from './inventory-app.component'
import { NavBarComponent } from './nav/navbar.components'
import {
    Toastr,
    TOASTR_TOKEN,
    JQ_TOKEN,
    PRIMENG_TOKEN,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from "./common/index"
import { appRoutes } from './routes'
import { Error404Component } from './errors/404.component'
import {AuthService} from "./user/auth.service";

declare let toastr:Toastr
declare let jQuery:Object
// declare let primeng:Object

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      InputTextModule, //for primeNg
      ButtonModule,     //for primeNg
      ConfirmDialogModule,
      RouterModule.forRoot(appRoutes),
      // CalendarModule.forRoot()
  ],
  declarations: [
      InventoryAppComponent,
      InventoryListComponent,
      InventoryThumbnailComponent,
      InventoryDetailsComponent,
      NavBarComponent,
      CreateInventoryComponent,
      Error404Component,
      CreateContractComponent,
      ContractListComponent,
      CollapsibleWellComponent,
      SimpleModalComponent,
      UpvoteComponent,
      ModalTriggerDirective,
      DurationPipe
  ],
  providers: [
      InventoryService,
      {
          provide: TOASTR_TOKEN,
          useValue: toastr
      },
      {
          provide: JQ_TOKEN,
          useValue: jQuery
      },
      InventoryRouteActivator,
      InventoryListResolver,
      VoterService,
      AuthService,
      {
          provide:'canDeactivateCreateInventory',
          useValue: checkDirtyState
      },
      {
          provide: LocationStrategy,
          useClass: HashLocationStrategy
      }
  ],
  bootstrap: [InventoryAppComponent]
})
export class AppModule {}

function checkDirtyState(component:CreateInventoryComponent){
    if(component.isDirty){
        window.confirm('You have not saved this item, do you really want to cancel?')
        // this.toastr.warning('You have not saved this item, do you really want to cancel?')
    }
    return true
}