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
  userName: string = "";
  nameError: string = "";

  ngOnInit(): void{
    this.title = "Hello from Bridgelabz...";
  }

  onClick() {
    console.log("Save button is clicked!");
    window.open(this.url, "_blank");
  }

  onInput() {
    console.log("Change Event Occured!");
    const nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if(nameRegex.test(this.userName)){
      this.nameError = "";
      return;
    }
      this.nameError = "Name is incorrect!";
    }
}
