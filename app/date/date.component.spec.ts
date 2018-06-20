import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DebugElement} from '@angular/core'
import { DateComponent } from './date.component';
import {DateUtilitiesService} from '../date-utilities.service'
import { MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'

import {newEvent} from '../../testing';
import { By }                 from '@angular/platform-browser';
import { FilterPipe} from '../filter.pipe';

describe('DateComponent when tested directly', () => {

    //https://angular.io/guide/testing#triggereventhandler
    //See dashboard-hero-component.spec.ts
    //See dashboard/dashboard.component.spec.ts

    //We will want to trigger a 'dateChange' event
    //One test will simply send a pre defined date object
    //Another test will pick a date from the picker and makes sure that it is sent

  let comp: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let heroDe: DebugElement;
  let heroEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DateComponent, 
        FilterPipe],
      providers : [DateUtilitiesService],
      imports: [BrowserAnimationsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        MatNativeDateModule, 
        FormsModule, 
        MatDatepickerModule]
  })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    comp    = fixture.componentInstance;

    // find the hero's DebugElement and element
    heroDe  = fixture.debugElement.query(By.css('.myDatePicker'));
    heroEl = heroDe.nativeElement;

    // trigger initial data binding
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should raise selected event when clicked (triggerEventHandler) -- make sure runs with $ ng test -sm=false -- else you get XMLHttpRequest error', () => {
    let myDate : Date = new Date("January 1, 2019");
    let obj = {"value" : myDate};

    spyOn(comp.childEvent, 'emit');
    heroDe.triggerEventHandler('dateChange', obj);
    expect(comp.childEvent.emit).toHaveBeenCalledWith('2019-1-1');
  });

  it('query selector 222', () => {
    //FIX ME -- why is this line returning NULL????
    //const nameInput: HTMLInputElement = heroEl.querySelector('input')
    //Why do these lines below work? FIX ME
    //HAH HAH HAH -- Because the lines below are using a native element
    //and the ones above are using a debug element
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('input')
    console.log("FOH")
    console.log(heroEl)
    console.log("BOH")
    //console.log(hostElement)
    console.log("ROH")
    console.log(nameInput);
    console.log("COH")
    console.log(nameInput.value)
    console.log("ROH")
    console.log(comp.myDateObject)

    nameInput.value = 'Thur Jun 14 2018 12:55:44 GMT-0700 (Pacific Daylight Time';

    nameInput.dispatchEvent(newEvent('input')); 

    fixture.detectChanges();
    console.log("BOH")
    console.log(nameInput);
    console.log("BOH")
    console.log(nameInput.value)
    console.log("BOH")
    console.log(comp.myDateObject)

  })
  
/*
    it('should raise selected event when clicked (element.click)', () => {
      let selectedHero: Hero;
      comp.selected.subscribe((hero: Hero) => selectedHero = hero);

      heroEl.click();
      expect(selectedHero).toBe(expectedHero);
    });

  it('should raise selected event when clicked (click helper)', () => {
    let selectedHero: Hero;
    comp.selected.subscribe(hero => selectedHero = hero);

    click(heroDe); // click helper with DebugElement
    click(heroEl); // click helper with native element

    expect(selectedHero).toBe(expectedHero);
  });
  */
});

