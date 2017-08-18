/**
 * Created by coughlat on 27-Mar-17.
 */
/**
 * import {Component} from '@angular/core'
 * @Component({
 *  selector: 'nameOfEventHere'
 *  })
 *
 *  export class nameOfComponentHere{
 *
 *  }
 */
import {Component, Input} from '@angular/core'
import {IInventory} from './shared/index'
@Component({
    selector: 'inventory-thumbnail',
    template: `
        <div [routerLink]="['/inventories', inventory.id]" class="well hoverwell thumbnail">
            <h2>{{inventory?.name | uppercase}}</h2>
            <div>Date: {{inventory?.date | date:'shortDate'}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="inventory?.time">
                Time: {{inventory?.time}} -
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>            
            <div>Price: {{inventory?.price | currency:'EUR':true}}</div>
            <div *ngIf="inventory?.location">
                <span>Location: {{inventory?.location?.address}}</span>
                <!--<span>&nbsp;</span>-->
                <span class="pad-left">{{inventory?.location?.city}}, {{inventory?.location?.country}}</span>
            </div>
            <div *ngIf="inventory?.onlineUrl">
                Online URL: {{inventory?.onlineUrl}}
            </div>
            <!--<button class="btn btn-primary" (click)="handleClickMe()">-->
                <!--Click me!-->
            <!--</button>-->
        </div>
    `,
    styles:[`
        .green {color: #003300 !important;}
        .bold { font-weight: bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left:10px;}
        .well div {color: #2b3e50 !important;}
    `]
})

export class InventoryThumbnailComponent{
    @Input() inventory:IInventory

    getStartTimeClass(){
        const isEarlyStart = this.inventory && this.inventory.time === '8:00 am'
        return {green: isEarlyStart, bold: isEarlyStart}
    }

    // or we could do this:
    //
    // if (this.event && this.event.time === '8:00 am')
    //         return 'green bold'
    // return ''

    // or an array:
    //     return ['green', 'bold']
    // return []


    // @Output() eventClick = new EventEmitter()
    // someProperty:any = "some fecking value"
    // handleClickMe(){
    //     //this.eventClick.emit('foo')
    //     this.eventClick.emit(this.event.name)
    // }

    // logFoo(){
    //     console.log('foo2')
    // }
}