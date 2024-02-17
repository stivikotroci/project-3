import { Component } from '@angular/core';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent {
name: string='iphone';
price: number= 999;
color: string= 'Red'
}
