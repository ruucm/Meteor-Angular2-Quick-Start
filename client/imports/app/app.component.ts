import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class MyApp { name = 'Meteor Angular2'; }