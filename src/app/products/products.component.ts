import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';
import * as Papa from 'papaparse';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [HttpClientModule, CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() type: any;
  @Input() subType: any;
  pageTitle: string = '';
  fileUrl: string = '/assets/machines/';
  csvData: any[] = [];
  showData: any[] = [];
  totalItems: number = 0;
  numPages: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 15;
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.type = params['type'];
      this.subType = params['subType'];
      this.loadProductData();
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['type'] || changes['subType']) {
      this.loadProductData();
    }
    window.scrollTo(0, 0);
    console.log(this.csvData);
  }

  loadProductData() {
    this.loadCSV();

    setTimeout(() => {
      this.showData = this.csvData.slice(0, 15);
    }, 500);
  }

  loadCSV() {
    this.fileUrl = "/assets/machines/";
    if (this.type == 'basic') {
      if (this.subType === 'single-head') {
        this.fileUrl += 'single_head.csv';
        this.pageTitle = 'Single Head Embroidery Machines';
      } else if (this.subType === 'double-head') {
        this.fileUrl += 'double_head.csv';
        this.pageTitle = 'Double Head Embroidery Machines';
      } else if (this.subType === 'multifunctional') {
        this.fileUrl += 'multifunctional.csv';
        this.pageTitle = 'Multifunctional Embroidery Machines';
      } else if (this.subType === 'chain-stitch') {
        this.fileUrl += 'chain_stitch.csv';
        this.pageTitle = 'Chain Stitch Embroidery Machines';
      }
    } else if (this.type == 'multihead') {
      if (this.subType === '3-head') {
        this.fileUrl += 'multi3_head.csv';
        this.pageTitle = '3 Head Embroidery Machines';
      } else if (this.subType === '4-head') {
        this.fileUrl += 'multi4_head.csv';
        this.pageTitle = '4 Head Embroidery Machines';
      } else if (this.subType === '6-head') {
        this.fileUrl += 'multi6_head.csv';
        this.pageTitle = '6 Head Embroidery Machines';
      } else if (this.subType === '8-head') {
        this.fileUrl += 'multi8_head.csv';
        this.pageTitle = '8 Head Embroidery Machines';
      }
    } else {
      if (this.subType === '1-plus-1-head') {
        this.fileUrl += '1_1Head.csv';
        this.pageTitle = '1+1 Head Embroidery Machines';
      } else if (this.subType === '1-head') {
        this.fileUrl += '1_head.csv';
        this.pageTitle = '1 Head Embroidery Machines';
      } else if (this.subType === '3-head') {
        this.fileUrl += '3_head.csv';
        this.pageTitle = '3 Head Embroidery Machines';
      } else if (this.subType === '4-head') {
        this.fileUrl += '4_head.csv';
        this.pageTitle = '4 Head Embroidery Machines';
      } else if (this.subType === '6-head') {
        this.fileUrl += '6_head.csv';
        this.pageTitle = '6 Head Embroidery Machines';
      }
    }
    
    
    this.http.get(this.fileUrl, { responseType: 'text' }).subscribe(
      (data) => this.extractData(data),
      (error) => console.error('Error loading CSV file', error)
    );
  }

  extractData(data: string) {
    Papa.parse(data, {
      complete: (result) => {
        this.csvData = result.data;
        this.totalItems = this.csvData.length;
        this.numPages = Math.ceil(this.totalItems / this.itemsPerPage);
        this.updateShowData();
      },
      header: true,
    });
  }

  updateShowData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.showData = this.csvData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage < this.numPages) {
      this.currentPage++;
      this.updateShowData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateShowData();
    }
  }

  data() {
    console.log(this.csvData);
  }
}
