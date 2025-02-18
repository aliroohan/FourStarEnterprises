import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  play = false;
  addPlay() {
    const video = document.querySelector('video');
    const play = document.querySelector('.pla img');
    
    if (!this.play) {
    play?.setAttribute('src', '/assets/pause.svg');
    video?.play();
    this.play = true;
    } else {
    play?.setAttribute('src', '/assets/play-button.svg');
    video?.pause();
    this.play = false;
    }
  }
}
