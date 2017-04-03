import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-root',
  providers: [],
  styles: [
    `.alert { margin-top: 10px; }`
  ],
  animations: [
    trigger('visibility', [
        state('shown', style({
            opacity: 1
        })),
        state('hidden', style({
            opacity: 0
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
