import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  username = 'Michael';
  today = new Date();
  showFiller = false;
  isOpen = true;
  constructor() {}

  ngOnInit(): void {}

  openSidebar() {
    if (this.isOpen === true) {
      this.isOpen = false;
    } else if (this.isOpen === false) {
      this.isOpen = true;
    }
  }
}
