import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-numbers',
  imports: [],
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  factoryArea: number = 45000;
  annualSalesRevenue: number = 5000000;
  salesCountry: number = 150;
  serviceTeam: number = 30;
  
  animatedValues: { [key: string]: number } = {
    factoryArea: 0,
    annualSalesRevenue: 0,
    salesCountry: 0,
    serviceTeam: 0
  };

  hasAnimated: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const componentPosition = document.querySelector('.index_about_number_box')?.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (componentPosition !== undefined && componentPosition < windowHeight) {
      this.animateValues();
      
    }
  }

  animateValues() {
    const duration = 2000; // Animation duration in milliseconds
    const step = (key: string, target: number) => {
      const increment = target / (duration / 100); // Calculate increment per 100ms
      const interval = setInterval(() => {
        if (this.animatedValues[key] < target) {
          this.animatedValues[key] += Math.floor(increment);
          if (this.animatedValues[key] > target) {
            this.animatedValues[key] = target;
          }
        } else {
          clearInterval(interval);
        }
      }, 50);
    };
    step('factoryArea', this.factoryArea);
    step('annualSalesRevenue', this.annualSalesRevenue);
    step('salesCountry', this.salesCountry);
    step('serviceTeam', this.serviceTeam);
  }
}
