import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  // styleUrls: ['./app.component.css']

  // use style [``] we can edit the css in here
  styles: [
    `
      h3 {
        color: dogerblue;
      }
    `
  ]
})
export class AppComponent {}
