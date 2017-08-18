/**
 * Created by coughlat on 29-Mar-17.
 */
import {Component} from '@angular/core'
import {AuthService} from "../user/auth.service";
import {IContract} from "../inventory/shared/inventory.model";
import {InventoryService} from "../inventory/shared/inventory.service";

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none;}}
        li > a.active {color: #f97924;}
    `]
})

export class NavBarComponent{
    searchTerm: string="";
    foundContracts: IContract[];

    constructor(private auth: AuthService, private inventoryService: InventoryService){

    }

    searchContracts(searchTerm){
        this.inventoryService.searchContracts(searchTerm).subscribe(contracts => {
            this.foundContracts = contracts
        })
    }
}
