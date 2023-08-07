import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  constructor(public dialog: MatDialog){}
  openDialog() {
    this.dialog.open(welcomePopupComponent);
  }

}

@Component({
  selector: 'welcome-popup',
  templateUrl: './welcome-popup.html',
})
export class welcomePopupComponent{

}