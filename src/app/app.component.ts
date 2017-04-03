import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  providers: [],
  styles: [
    `.alert { margin-top: 10px; }`
  ],
  animations: [
    trigger('visibility', [
        state('shown', style({
            'font-size': '5px',
        })),
        state('hidden', style({
            'font-size' : '10px',
        })),
        transition('* => *', animate('.5s'))
    ])
  ],
  template: `
  <div class="container">
    <h1>Animations</h1>
    <hr>
    <button type="button"
        class="btn btn-primary btn-lg"
        (click)="toggleVisibility()">
      {{ getLabel() }}
    </button>
      {{ getLabel() }}    
    <div [@visibility]="visibilitystate" class="alert alert-success">
      Animate good times! Come on!
    </div>
  </div>
  `
})



export class AppComponent {
  visibilitystate = 'shown';

  getLabel() {
    return this.visibilitystate == 'shown' ? 'Hide' : 'Show';
  }

  toggleVisibility() {
    this.visibilitystate = this.visibilitystate == 'shown' ? 'hidden' : 'shown';
  }
}
