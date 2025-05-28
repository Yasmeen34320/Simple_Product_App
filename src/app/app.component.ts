import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProFormComponent } from "../Components/pro-form/pro-form.component";
import { ProductsViewComponent } from "../Components/products-view/products-view.component";

@Component({
  selector: 'app-root',
  imports: [ProFormComponent, ProductsViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task3';
  Pro:{productName:string,desc:string,url:string,rating:number}={
    productName:"",
    desc:"",
    url:"",
    rating:1
  }
 sendData(ev:any)
  {
    this.Pro=ev
  }
}
