import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { JQ_TOKEN } from './jquery.service';

@Component({
    selector: 'simple-modal',
    template: `
        <div id="{{elementId}}" #dialogContainer class="modal fade" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                        <h4 class="modal-title">{{title}}</h4>
                    </div>
                    <div class="modal-body" (click)="closeDialog()">
                        <ng-content></ng-content>
                    </div>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .modal-body { height: 250px; overflow-y: scroll; }
    `]
})
export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @ViewChild('dialogContainer') dialgoElement: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    closeDialog() {
        this.$(this.dialgoElement.nativeElement).modal('hide');
    }
}