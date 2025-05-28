import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-products-view',
  imports: [CommonModule],
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.css'
})
export class ProductsViewComponent implements OnChanges {
  @Input() Product:{productName:string,desc:string,url:string,rating:number}={
    productName:"",
    desc:"",
    url:"",
    rating:1
  }
  Products=[
    {
      productName: "Wireless Headphones",
      desc: "High-quality noise-cancelling headphones with 40-hour battery life.",
      url: "https://i.pinimg.com/736x/e0/a6/25/e0a62568972e9ee41851cc8e8f246f6c.jpg",
      rating: 4.7
    },
    {
      productName: "Smartwatch Pro",
      desc: "Fitness tracker with heart rate monitor, GPS, and 5-day battery.",
      url: "https://i.pinimg.com/736x/0a/4e/b3/0a4eb3028bdfcc07b64395a87b4db0fc.jpg",
      rating: 4.5
    },
    {
      productName: "4K Ultra HD Monitor",
      desc: "27-inch 4K monitor with ultra-thin bezels and vibrant colors.",
      url: "https://i.pinimg.com/474x/7b/f3/7d/7bf37d1dc015a026a84a30c21bedccab.jpg",
      rating: 4.8
    },
    {
      productName: " Bluetooth Speaker",
      desc: "Waterproof speaker with rich bass and 12-hour playtime.",
      url: "https://i.pinimg.com/474x/61/7f/33/617f3344fc2a5d6c969ed2b9549a563e.jpg",
      rating: 4.6
    }
  ];
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(!changes["Product"].firstChange){
      this.Products.push(this.Product)
    }
  }
}
