import { NgModule } from '@angular/core';
import { BookMaterialModule } from '../material.module';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';


@NgModule({
  declarations: [MessagePopupComponent],
  imports: [
    BookMaterialModule
  ],
  entryComponents: [MessagePopupComponent],
})
export class CommondModule { }
