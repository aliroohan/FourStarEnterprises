import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomepagePicsComponent } from '../homepage-pics/homepage-pics.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NumbersComponent } from '../numbers/numbers.component';
import { QualitiesComponent } from '../qualities/qualities.component';
import { SingleheadHomePageComponent } from '../singlehead-home-page/singlehead-home-page.component';
import { CustomerReviewsComponent } from '../customer-reviews/customer-reviews.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    HomepagePicsComponent,
    AboutUsComponent,
    NumbersComponent,
    QualitiesComponent,
    SingleheadHomePageComponent,
    CustomerReviewsComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
