import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartComponent } from '@app-components/cart/cart.component';
import { SearchComponent } from '@app-components/search/search.component';
import { MyCollectionComponent } from '@app-components/my-collection/my-collection.component';
import { BillingDetailsComponent } from '@app-components/billing-details/billing-details.component';

const routes: Routes = [

  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'my-collection',
    component: MyCollectionComponent
  },
  {
    path: 'billing-details',
    component: BillingDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
