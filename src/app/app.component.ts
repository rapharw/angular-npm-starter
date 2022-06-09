import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-jasmine-starter';

  hello(value: string){
    if(value !== '')
      return "HELLO " + value;
    else
      return "Wow! Please enter a value";
  }
}
