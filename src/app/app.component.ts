import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';
  imgUrl="./assets/logo.bridge.jfif"
  url="https://www.bridgelabz.com"
  userName:String = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz...";
  }

  onClick() {
    console.log("Save button is clicked!");
    window.open(this.url, "_blank");
  }
}
