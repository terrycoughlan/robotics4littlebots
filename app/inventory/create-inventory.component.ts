/**
 * Created by coughlat on 21-Apr-17.
 */
import {Component, Inject} from '@angular/core'
import {Router} from "@angular/router"
import {InventoryService} from './shared/index'
import {Toastr, TOASTR_TOKEN} from "../common/toastr.service";

@Component({
    templateUrl: 'app/inventory/create-inventory.component.html',
    styles: [`
        em {float:right; color: #e05c65; padding-left: 10px}
        .error input {background-color: #e3c3c5;}
        .error ::-webkit-input-placeholder {color: #999;}
        .error ::-moz-placeholder {color: #999;}
        .error :-moz-placeholder {color: #999;}
        .error :-ms-input-placeholder {color: #999;}
    `]
})
export class CreateInventoryComponent{
    isDirty:boolean = true
    constructor(private router: Router, private inventoryService: InventoryService, @Inject(TOASTR_TOKEN) private toastr: Toastr){

    }

    saveInventory(formValues){
        this.inventoryService.saveInventory(formValues)
        this.isDirty = false
        this.router.navigate(['/inventories'])
        this.toastr.success('Inventory Saved')
    }

    cancel(){
        this.router.navigate(['/inventories'])
    }
}