import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommondModule } from '../../common.module';

import { MessagePopupComponent } from './message-popup.component';

describe('MessagePopupComponent', () => {
  let component: MessagePopupComponent;
  let fixture: ComponentFixture<MessagePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagePopupComponent],
      imports: [CommondModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
