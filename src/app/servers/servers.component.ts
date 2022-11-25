import { Component, OnInit } from '@angular/core';

@Component({
/*   selector: '[app-servers]', */  
/*   selector: '.app-servers', */
  selector: 'app-servers',
  templateUrl: './servers.component.html',
/*   template: '<app-server></app-server><app-server></app-server>', */
/*   template: `<section>
        <h1>I'm in the Servers Component</h1>
        <p>Below this I have 2 Server Components</p>
        <app-server></app-server>
        <app-server></app-server>
      </section>`,      */

  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = true;
  serverCreationStatus = 'NO server was created!';
  serverName = 'TestserveriX';
  serverCreated = false;
  servers = ['MegaServeri', 'GigaServeri'];

  constructor() { 
    // setTimeout(() => { this.allowNewServer = true; }, 2000);
  }
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server WAS created! Server name is ' + this.serverName;
  }
  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}