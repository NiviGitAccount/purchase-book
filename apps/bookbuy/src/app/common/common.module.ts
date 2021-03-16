import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';


@NgModule({
  declarations: [MessagePopupComponent],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  entryComponents: [MessagePopupComponent],
})
export class CommondModule { }
