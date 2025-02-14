import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage-pics',
  imports: [],
  templateUrl: './homepage-pics.component.html',
  styleUrl: './homepage-pics.component.css'
})
export class HomepagePicsComponent implements OnInit {
  currentIndex: number = 0; 

  ngOnInit() {
  }

  currentSlide(index: number) {
    this.currentIndex = index;
    this.updateSlides(); 
  }

  updateSlides() {
    const slides = document.querySelector('.slides') as HTMLElement;
    slides.style.transform = `translateX(-${this.currentIndex * 100}%)`; 
    this.updateIndicators(); 
  }

  updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentIndex); 
    });
  }

}
