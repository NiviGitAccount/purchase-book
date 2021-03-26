import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BookEffects } from '@store/effects';
import { BookReducer } from '@store/reducer';

import { SharedRoutingModule } from './shared-routing.module';
import { BookMaterialModule } from '../material.module';

import { BookCardComponent } from '@shared-components/book-card/book-card.component';


@NgModule({
  declarations: [BookCardComponent],
  imports: [
    NgbModule,
    CommonModule,
    BookMaterialModule,
    SharedRoutingModule,
    EffectsModule.forRoot([BookEffects]),
    StoreModule.forRoot({ book: BookReducer })
  ],
  exports: [BookCardComponent],
})
export class SharedModule { }
