import { Component, Renderer2 } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as Papa from 'papaparse';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-singlehead-home-page',
  imports: [HttpClientModule, CommonModule, NgFor],
  standalone: true,
  templateUrl: './singlehead-home-page.component.html',
  styleUrl: './singlehead-home-page.component.css'
})
export class SingleheadHomePageComponent {

  csvData: any[] = [];
  csvData2: any[] = [];

  private currentPosition = 0;
  private slideWidth = 50;
  private totalSlides = 0;
  private visibleSlides = 2;

  private currentPosition2= 0;
  private slideWidth2= 50; // percentage width of each slide
  private totalSlides2= 0;
  private visibleSlides2= 2; // number of slides visible at once

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit() {
    this.loadCSV();
    this.loadCSV1();
  }

  loadCSV() {
    this.http.get('/assets/machines/single_head.csv', { responseType: 'text' })
      .subscribe(
        data => this.extractData(data),
        error => console.error('Error loading CSV file', error)
      );
  }

  extractData(data: string) {
    Papa.parse(data, {
      complete: (result) => {
        this.csvData = result.data.slice(0, 15);
        this.totalSlides = this.csvData.length;
      },
      header: true
    });
  }

  onNext() {
    const swiper = document.getElementById('wrap');

    if (!swiper) {
      console.error('Swiper not found');
      return;
    }
    
    console.log(this.currentPosition > -(this.slideWidth * (this.totalSlides - this.visibleSlides)));
    if (this.currentPosition > -(this.slideWidth * (this.totalSlides - this.visibleSlides))) {
      console.log(swiper);
      
      this.currentPosition -= this.slideWidth;
      console.log(this.currentPosition);
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition}%, 0px, 0px)`
      );
    } else {
      this.currentPosition = 0;
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition}%, 0px, 0px)`
      );
    }
  }

  

  loadCSV1() {
    this.http.get('/assets/machines/multi6_head.csv', { responseType: 'text' })
      .subscribe(
        data => this.extractData1(data),
        error => console.error('Error loading CSV file', error)
      );
  }

  extractData1(data: string) {
    Papa.parse(data, {
      complete: (result) => {
        this.csvData2 = result.data.slice(0, 15);
        this.totalSlides = this.csvData2.length;
      },
      header: true
    });
  }


  onPrev() {
    const swiper = document.getElementById('wrap');
    if (!swiper) return;

    
    if (this.currentPosition < 0) {
      this.currentPosition += this.slideWidth;
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition}%, 0px, 0px)`
      );
    } else {
      this.currentPosition = -(this.slideWidth * (this.totalSlides - this.visibleSlides));
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition}%, 0px, 0px)`
      );
    
    }
  }

  onNext1() {
    const swiper = document.getElementById('wrap2');

    if (!swiper) {
      console.error('Swiper not found');
      return;
    }
    
    if (this.currentPosition2 > -650) {
      this.currentPosition2 -= this.slideWidth2;
      this.renderer.setStyle(swiper, 'transition-duration', '900ms');
      this.renderer.setStyle(swiper, 'transform', `translate3d(${this.currentPosition2}%, 0px, 0px)`);
      
    } else {
      this.currentPosition2 = 0;
      this.renderer.setStyle(swiper, 'transition-duration', '900ms');
      this.renderer.setStyle(swiper, 'transform', `translate3d(${this.currentPosition2}%, 0px, 0px)`);
    }
  }

  onPrev1() {
    const swiper = document.getElementById('wrap2');
    if (!swiper) return;
    // console.log(this.currentPosition2);
    if (this.currentPosition2 < 0) {
      console.log(this.currentPosition2);
      this.currentPosition2 += this.slideWidth2;
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition2}%, 0px, 0px)`
      );
    } else {
      this.currentPosition2 = -650;
      swiper.setAttribute(
        'style',
        `transition-duration: 900ms; transform: translate3d(${this.currentPosition2}%, 0px, 0px)`
      );
    }
  }
}
