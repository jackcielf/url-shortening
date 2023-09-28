import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu = false;

  constructor() { }

  ngOnInit() {
  }

  showHideMenu(): void {
    this.openMenu = !this.openMenu;
    console.log(`nakcn`)
    console.log(this.openMenu)
  }

}
