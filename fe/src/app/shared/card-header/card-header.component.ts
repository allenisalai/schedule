import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'shared-card-header',
  template: `
    <div class="card-header card-header-primary card-header-icon">
      <div class="card-icon">
        <i class="material-icons">{{icon}}</i>
      </div>
      <ng-content>
        
      </ng-content>

    </div>
  `,
  styles: []
})
export class CardHeaderComponent implements OnInit {
  @Input() icon:string

  constructor() { }

  ngOnInit() {
  }

}
