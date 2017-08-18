/**
 * Created by coughlat on 20-Apr-17.
 */
import {Routes} from '@angular/router'
import {
    InventoryListComponent,
    InventoryDetailsComponent,
    CreateInventoryComponent,
    InventoryRouteActivator,
    InventoryListResolver,
    CreateContractComponent
} from './inventory/index'
import {Error404Component} from './errors/404.component'

export const appRoutes:Routes = [
    {path: 'inventories/new', component: CreateInventoryComponent, canDeactivate:['canDeactivateCreateInventory']},
    {path: 'inventories', component: InventoryListComponent, resolve:{inventories:InventoryListResolver}},
    {path: 'inventories/:id', component: InventoryDetailsComponent, canActivate:[InventoryRouteActivator]},
    {path: 'inventories/contract/new', component: CreateContractComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/inventories', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]
