import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';
import {DateUtilitiesService} from '../date-utilities.service'
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {
  ActivatedRoute, ActivatedRouteStub, asyncData, click, newEvent
} from '../../testing';


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

  it('query selector', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')
    console.log("DOH")
    console.log(nameInput);
    console.log("DOH")
    console.log(nameInput.value)
    console.log("DOH")
    console.log(component.myDateObject)

    nameInput.value = 'Thur Jun 14 2018 12:55:44 GMT-0700 (Pacific Daylight Time';

    nameInput.dispatchEvent(newEvent('input'));

    fixture.detectChanges();
    console.log("BOH")
    console.log(nameInput);
    console.log("BOH")
    console.log(nameInput.value)
    console.log("BOH")
    console.log(component.myDateObject)

  })

  it('Validate component is sending correctly constructed events', () => {
    //https://angular.io/guide/testing#triggereventhandler
    //See dashboard-hero-component.spec.ts

    
  })
});
