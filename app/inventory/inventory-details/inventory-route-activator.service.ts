/**
 * Created by coughlat on 21-Apr-17.
 */
import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router'
import {Injectable} from '@angular/core'
import {InventoryService} from '../shared/inventory.service'

@Injectable()
export class InventoryRouteActivator implements CanActivate{
    constructor(private inventoryService:InventoryService, private router:Router){

    }

    canActivate(route:ActivatedRouteSnapshot){
        const inventoryExists = !!this.inventoryService.getInventory(+route.params['id'])

        if(!inventoryExists)
            this.router.navigate(['/404'])
        return inventoryExists
    }
}
