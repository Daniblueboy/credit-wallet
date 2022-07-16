import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isOpen = true;
  constructor() {}

  ngOnInit(): void {}

  openExtendedSidebar() {
    if (this.isOpen === true) {
      this.isOpen = false;
    } else if (this.isOpen === false) {
      this.isOpen = true;
    }
  }
}
