/**
 * Created by coughlat on 24-Apr-17.
 */
import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import {InventoryService} from "./shared/inventory.service";

@Injectable()
export class InventoryListResolver implements Resolve<any> {
    constructor(private inventoryService:InventoryService){

    }
    resolve(){
        return this.inventoryService.getInventories().map(inventory => inventory)
    }
}