import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

newCoffee: Coffee = new Coffee();

constructor(private productService: ProductService, private router: Router) { }

onSubmit() {
  this.productService.createNewCoffee(this.newCoffee).subscribe( result => {
    console.log(result);
    this.router.navigateByUrl("/products");
  });
}


}
