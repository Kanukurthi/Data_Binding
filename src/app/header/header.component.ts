import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']  // Corrected the typo from 'styleUrl' to 'styleUrls'
})
export class HeaderComponent {

  source: string = "/assets/background-image.jpg";
  slogan: string = "Enjoy Shopping and have a great look";
  getSlogan() {
    return "This slogan inspires customers to enjoy shopping!";
  }
  searchValue: string = "Mobile";

  // Event Binding 
  changeSearchValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
