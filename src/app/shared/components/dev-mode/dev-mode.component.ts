import { Component, isDevMode, OnInit } from '@angular/core';

@Component({
  selector: 'app-dev-mode',
  templateUrl: './dev-mode.component.html',
  styleUrls: ['./dev-mode.component.scss']
})
export class DevModeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  devMode(){
    return isDevMode();
  }


}
