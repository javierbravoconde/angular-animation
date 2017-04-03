import { Component, trigger, state, animate, transition, style } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  providers: [],
  styles: [
    `.alert 
	{ 
		position: fixed; 
		top: 200px;
	}`
  ],
  animations: [
    trigger('visibility', [
		transition('shown => hidden', [
		  style({
			'top' : '400px'
		  }),
		  animate('.5s ease-in', style({
            'right' : '0px',
			'top' : '0px',
			opacity: 0,
			transform: 'scale(0.5)'
		  }))
		]),		
        
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
    <div  [@visibility]="visibilitystate" class="alert">
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
