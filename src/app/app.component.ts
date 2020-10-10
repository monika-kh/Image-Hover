import { Component } from '@angular/core';
import demoData from '../assets/image.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  Images: any[] = demoData;
  isDisplay: boolean = false;
  show1: boolean;
  selectedImage;

  constructor() {}

  show(data: any) {
    this.isDisplay = data;
  }

  hide(data: any) {
    this.isDisplay = !data;
  }
}
