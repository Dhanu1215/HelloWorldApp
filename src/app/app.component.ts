import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl="./assets/logo.bridge.jfif"
  ngOnInit(): void{
    this.title = "Hello from Bridgelabz...";
  }
}
