import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  expandedIndex: number = -1;


  constructor() {}

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? -1 : index;
}
}

