/**
 * Created by coughlat on 27-Apr-17.
 */
import {Component} from '@angular/core'

@Component({
    selector: 'collapsible-well',
    template:`
        <div (click)="toggelContent()" class="well pointable hoverwell2">
            <h4>
                <ng-content select="[well-title]"></ng-content>
            </h4>
            <ng-content *ngIf="visible" select="[well-body]"></ng-content>
        </div>
    `
})
export class CollapsibleWellComponent{
    visible: boolean = true

    toggelContent(){
        this.visible = !this.visible
    }
}