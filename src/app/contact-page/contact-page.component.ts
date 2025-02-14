import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { ContactComponent } from "../contact/contact.component";

@Component({
  selector: 'app-contact-page',
  imports: [HeaderComponent, FooterComponent, ContactComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent {
  constructor() {
    window.scrollTo(0, 0);
  }

}
