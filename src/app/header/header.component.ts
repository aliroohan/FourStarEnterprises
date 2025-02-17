import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { url } from 'inspector';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuOn = false;
  isHome = true;
  isMachine = false;
  isVideos = false;
  isContact = false;
  currentRoute: string = '/home';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log(this.currentRoute);

        this.isHome = this.currentRoute === '/home';
        this.isMachine = this.currentRoute.startsWith('/machine');
        this.isVideos = this.currentRoute === '/videos';
        this.isContact = this.currentRoute === '/contact';
        const home = document.querySelector('#home');
        const machine = document.querySelector('#machine');
        const videos = document.querySelector('#videos');
        const contact = document.querySelector('#contact');
        if (this.isHome) {
          home?.classList.add('on');
          machine?.classList.remove('on');
          videos?.classList.remove('on');
          contact?.classList.remove('on');
        }
        if (this.isMachine) {
          home?.classList.remove('on');
          machine?.classList.add('on');
          videos?.classList.remove('on');
          contact?.classList.remove('on');
        }
        if (this.isVideos) {
          home?.classList.remove('on');
          machine?.classList.remove('on');
          videos?.classList.add('on');
          contact?.classList.remove('on');
        }
        if (this.isContact) {
          home?.classList.remove('on');
          machine?.classList.remove('on');
          videos?.classList.remove('on');
          contact?.classList.add('on');
        }


      });
  }

  ngOnInit() {
    
  }

  machines = {
    basic: [
      {name: 'Single Head Embroidery Machines', url: 'single-head'},
      {name: 'Double Head Embroidery Machines', url: 'double-head'},
      {name: 'Multifunctional Embroidery Machines', url: 'multifunctional'},
      {name: 'Chain Stitch Embroidery Machines', url: 'chain-stitch'},
    ],
    multihead: [
      {name: '3 Head Embroidery Machines', url: '3-head'},
      {name: '4 Head Embroidery Machines', url: '4-head'},
      {name: '6 Head Embroidery Machines', url: '6-head'},
      {name: '8 Head Embroidery Machines', url: '8-head'},
    ],
    moreProducts: [
      {name: '1+1 Head', url: '1-plus-1-head'},
      {name: '1 Head', url: '1-head'},
      {name: '3 Head', url: '3-head'},
      {name: '4 Head', url: '4-head'},
      {name: '6 Head', url: '6-head'},
    ]
  };

  showMenu() {
    const menu = document.querySelector('.nav_box');
    const menuIcon = document.querySelector('.hd_btn');
    if (this.menuOn) {
      menu?.setAttribute('style', 'display: none;');
      menuIcon?.classList.remove('on');
      this.menuOn = false;
    } else {
      menu?.setAttribute('style', 'display: block;');
      menuIcon?.classList.add('on');
      this.menuOn = true;
    }
  }

  toggleSubmenu(event: Event) {
    if (window.innerWidth <= 768) {
      event.preventDefault();
      const target = event.currentTarget as HTMLElement;
      const parent = target.parentElement;
      if (parent) {
        parent.classList.toggle('active');
      }
    }
  }

}
