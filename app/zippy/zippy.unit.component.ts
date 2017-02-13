import {Component, Input} from '@angular/core'

@Component({
    selector: 'zippy-unit',
    template: `
        <div class="panel panel-default">
            <div class="panel-heading" 
             (click)="toggle()"
             [ngStyle]="{
                 'cursor': 'pointer'
             }"
                >
                {{title}}
                <i class="pull-right glyphicon "
                [ngClass]="{
                    'glyphicon-chevron-up': !isExpanded,
                    'glyphicon-chevron-down': isExpanded
                }"
                ></i>
            </div>
            <div class="panel-body" *ngIf="isExpanded">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyUnitComponent{
    isExpanded = false;
    @Input() title: string;

    toggle(){
        this.isExpanded = !this.isExpanded;
    }
}