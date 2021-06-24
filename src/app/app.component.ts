import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  elmer ={
    name: "elmer",
    age: "19",
    text: "This text should be altered with two way data binding."
  }
  title = 'angularChallenge';
}
