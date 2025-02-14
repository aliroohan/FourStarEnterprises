import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { VideoComponent } from "../video/video.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-videopage',
  imports: [HeaderComponent, VideoComponent, FooterComponent],
  templateUrl: './videopage.component.html',
  styleUrl: './videopage.component.css'
})
export class VideopageComponent {

}
