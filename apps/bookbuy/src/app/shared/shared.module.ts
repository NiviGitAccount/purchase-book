import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookEffects } from '@store/effects';
import { BookReducer } from '@store/reducer';

import { SharedRoutingModule } from './shared-routing.module';

import { BookCardComponent } from '@shared-components/book-card/book-card.component';


@NgModule({
  declarations: [BookCardComponent],
  imports: [
    NgbModule,
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    SharedRoutingModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({ book: BookReducer })
  ],
  exports: [BookCardComponent],
})
export class SharedModule { }
