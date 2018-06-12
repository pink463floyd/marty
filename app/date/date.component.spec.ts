import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import {FormsModule} from '@angular/forms'
import {DateUtilitiesService} from '../date-utilities.service'
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateComponent ],
      imports: [BrowserAnimationsModule, 
                MatInputModule, 
                MatFormFieldModule, 
                FormsModule, 
                MatDatepickerModule,
                MatNativeDateModule],
      providers: [DateUtilitiesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
