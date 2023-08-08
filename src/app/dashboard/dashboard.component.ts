
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @Input() userID: string;

 
  collection: string[];

  constructor() {
    this.collection = ['Value 1', 'Value 2', 'Value 3'];
  }
}

