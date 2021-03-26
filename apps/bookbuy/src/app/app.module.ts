import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { SharedModule } from '@shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { BookReducer } from '@store/reducer';
import { BookEffects } from '@store/effects';

import { AppComponent } from './app.component';
import { SearchComponent } from '@app-components/search/search.component';
import { CartComponent } from '@app-components/cart/cart.component';
import { MyCollectionComponent } from '@app-components/my-collection/my-collection.component';
import { BillingDetailsComponent } from '@app-components/billing-details/billing-details.component';

import { environment } from '../environments/environment';
import { CommondModule } from './common/common.module';
import { BookMaterialModule } from './material.module';
import { MessagePopupComponent } from './common/components/message-popup/message-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    SearchComponent,
    MyCollectionComponent,
    BillingDetailsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    SharedModule,
    CommondModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BookMaterialModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({ book: BookReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  entryComponents: [MessagePopupComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
