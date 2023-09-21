import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

constructor (private productService: ProductService, private router: Router) { }
  
coffeeList: Coffee[] = []

searchText: string = '';

onSearchTextEntered(searchValue: string) {
this.searchText = searchValue;
// console.log(this.searchText);
}

ngOnInit(): void {
  this.loadProducts();
}

loadProducts() {
  this.productService.getAllProducts().subscribe(products => {
    this.coffeeList = products;
  })
}

onDelete(num:number) {
  this.productService.deleteCoffeeById(num).subscribe(response => {
    console.log(response);
    this.refreshPage();
  })
}

refreshPage() {
  window.location.reload();
 }

 sortPriceAscend() {
  this.productService.sortPriceAscend().subscribe(result => {
    this.coffeeList = result;
  })
 }
 sortPriceDesc() {
  this.productService.sortPriceDesc().subscribe(result => {
    this.coffeeList = result;
  })
 }
 viewPrice: boolean = false;
viewName:boolean = false;
 togglePrice(){
  if(this.viewPrice){
    this.viewPrice = false;
    this.sortPriceAscend();
  }
  else {
    this.viewPrice = true;
    this.sortPriceDesc();
  }
}

toggleName(){
  if(this.viewName){
    this.viewName = false;
    this.sortNameAscend();
  }
  else {
    this.viewName = true;
    this.sortNameDesc();
  }
}

sortNameAscend() {
  this.productService.sortNameAscend().subscribe(result => {
    this.coffeeList = result;
  })
 }
 sortNameDesc() {
  this.productService.sortNameDesc().subscribe(result => {
    this.coffeeList = result;
  })
 }

 
}
