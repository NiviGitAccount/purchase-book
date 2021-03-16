import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MatCardModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({ book: BookReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  entryComponents: [MessagePopupComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
