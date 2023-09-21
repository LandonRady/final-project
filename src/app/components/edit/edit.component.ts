import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{

  thisCoffee: Coffee = new Coffee();

  id: number = 0
  constructor(private productService: ProductService, private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(result => {
      this.thisCoffee = result;
    })
  }

  onSubmit() {
    this.productService.editProductById(this.id, this.thisCoffee).subscribe(edittedCoffee => {
      console.log(edittedCoffee);
      this.router.navigateByUrl("/products");
    })
  }

}
