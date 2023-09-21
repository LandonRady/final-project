import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { NewComponent } from './components/new/new.component';
import { EditComponent } from './components/edit/edit.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [

{path: "", redirectTo: "home", pathMatch: "full"},
{path: "home", component: HomeComponent},
{path: "about", component: AboutComponent},
{path: "products", component: ProductsComponent},
{path: "products/:id", component: DetailsComponent},
{ path: "new", component: NewComponent },
{path: "edit/:id", component: EditComponent},
{ path: "**", component: NotfoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
