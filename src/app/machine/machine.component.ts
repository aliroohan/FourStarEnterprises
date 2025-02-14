import { HeaderComponent } from '../header/header.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-machine',
  imports: [HeaderComponent, ProductsComponent, FooterComponent],
  templateUrl: './machine.component.html',
  styleUrl: './machine.component.css',
})
export class MachineComponent implements OnInit, OnDestroy {
  type: string = '';
  subType: string = '';
  private routeSub!: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      this.type = params['type'];
      this.subType = params['subtype'];
      console.log(this.type);
      console.log(this.subType);
      this.reload();
    });
  }

  reload() {
    console.log('reload');
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
