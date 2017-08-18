/**
 * Created by coughlat on 20-Apr-17.
 */
import {Component} from '@angular/core'
import {InventoryService} from '../shared/inventory.service'
import {ActivatedRoute, Params} from '@angular/router'
import {IInventory, IContract} from '../shared/index'


@Component({
    templateUrl:
    `/app/inventory/inventory-details/inventory-details.component.html`,
    styles: [`
        .container {padding-left: 20px; padding-right: 20px;}
        .inventory-image {height: 100px;}
        a {cursor:pointer;}
    `]
})
export class InventoryDetailsComponent{
    inventory:IInventory
    addMode: boolean
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private inventoryService:InventoryService, private route:ActivatedRoute){

    }
    ngOnInit(){
        this.route.params.forEach((params: Params) => {
            this.inventory = this.inventoryService.getInventory(+params['id'])
            this.addMode = false
        })
    }

    addContract(){
        this.addMode = true
    }

    saveNewContract(contract:IContract){
        const nextId = Math.max.apply(null, this.inventory.contracts.map(c => c.id));
        contract.id = nextId + 1
        this.inventory.contracts.push(contract)
        this.inventoryService.updateInventory(this.inventory)
        this.addMode = false
    }

    cancelAddContract(){
        this.addMode = false
    }
}