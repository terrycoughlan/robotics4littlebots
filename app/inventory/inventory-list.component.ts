/**
 * Created by coughlat on 24-Mar-17.
 */
import {Component, OnInit, ViewEncapsulation} from '@angular/core' //import Component decorator
import {InventoryService} from './shared/inventory.service'
import {ConfirmationService, Message} from "primeng/components/common/api"
import {ActivatedRoute} from "@angular/router"
import {IInventory} from './shared/index'

@Component({   //and Decorator class
    // selector: 'inventory-list',
    template: `
        <!--<h1>Hello from PrimeNG!</h1>-->
        <!--<input type="text" pInputText placeholder="Enter your name"-->
               <!--(change)="onChangeEvent($event)" />-->
        <!--<button pButton type="text"-->
                <!--(click)="greetMe()" icon="fa-check" label="Greet me"></button>-->

        <!--<p> {{theUserSaid}}-->

            <!--<p-confirmDialog width="400"></p-confirmDialog>-->
        <!--<div>-->
            
        <h1 style="margin-left: 20px;">Robotics4LittleBots</h1>
        <hr>       
        <div class="row">
            <div *ngFor="let inventory of inventories" class="col-md-5">
                <inventory-thumbnail [inventory]="inventory"></inventory-thumbnail>
            </div>    
        </div>    
            <!--<h3>{{thumbnail.someProperty}}</h3>-->
            <!--<button class="btn btn-primary" (click)="thumbnail.logFoo()">-->
                <!--Log me some foo22222-->
            <!--</button>-->
        <!--</div>-->`,
    providers:  [ConfirmationService]
    //,encapsulation: ViewEncapsulation.Native   // Native is not supported
})
export class InventoryListComponent implements OnInit{
    inventories:IInventory[]
    constructor(
        private inventoryService: InventoryService,
        private confirmationService: ConfirmationService,
        private route:ActivatedRoute
    ){

    }
    ngOnInit(){
        this.inventories = this.route.snapshot.data['inventories']
    }

    name: string;
    userResponse: Message[]=[];
    theUserSaid: string;

    // constructor(private confirmationService: ConfirmationService) {}

    onChangeEvent({target}){
        this.name = target.value;
        console.log(this.name);
    }

    greetMe(){

        this.confirmationService.confirm({
            message: ` Hey ${this.name}, do you like PrimeNG?`,
            header: 'Greeting',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.userResponse = [];
                this.userResponse.push({severity:'info', summary:'Confirmed', detail:'I like PrimeNG'});
                this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
            },
            reject: () => {
                this.userResponse = [];
                this.userResponse.push({severity:'info', summary:'Rejected', detail:'I don\'t really like PrimeNG'});
                this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
            }
        });
    }
}