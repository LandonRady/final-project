import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  thisProduct: Coffee = new Coffee();

  constructor(private productService: ProductService, private actRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['id']
    console.log(this.actRoute);
    this.productService.getProductById(id).subscribe(product => {
      this.thisProduct = product;
    })
  }
  onDelete(num:number) {
    this.productService.deleteCoffeeById(num).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl("/products");
    })
  }
  
  }


