import { Component } from "@angular/core";

@Component({
  selector: "server",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  // assign the value here
  // define type by using semicolon and the type
  serverId: number = 10;
  serverStatus: string = "offline";

  // createmethod
  getServerStatus() {
    return this.serverStatus;
  }
}
