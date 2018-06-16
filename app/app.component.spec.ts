import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import {DateUtilitiesService} from './date-utilities.service'
import {routes} from './app-routing.module'
import {StandingsComponent} from './standings/standings.component';
import {Test2Component} from './test2/test2.component'
import { FilterPipe} from './filter.pipe';



describe('Minimal AppComponent (with beforeEach)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [AppComponent, 
          DateComponent, 
          StandingsComponent, 
          Test2Component, 
          FilterPipe],
      providers : [DateUtilitiesService],
      imports: [BrowserAnimationsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "Banner" somewhere in html code', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('Banner');
  });

  it('should contain "Banner" specifically in FIRST <h2> element"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    console.log(bannerElement);
    const h2 = bannerElement.querySelector('h2');
    console.log(h2.textContent);

    expect(h2.textContent).toEqual('Banner');
  });

  
  it('title in the DOM after createComponent()', () => {
    expect(component.title).toEqual('app');
  });

  
  it('title in the DOM after detectChanges() FIX ME -- lots of messy console output', () => {
    fixture.detectChanges();
    expect(component.title).toEqual('app works!');
  });

  /*
   FIX ME
  it('Set title in test after detectChanges() FIX ME -- lots of messy console output', () => {
    component.title = "Scott";
    fixture.detectChanges();
    expect(component.title).toEqual('Scott');
  });
  */

  it('Validate that "advert2" box contains title "$$$ B"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const h2 = bannerElement.querySelector('.advert2');
    expect(h2.textContent).toContain('$$$ B');
  });


});

//Experiment to fix the issue about the 'navigate' statement in ngInit being called before router is set up
//Did not work though :-(  
  // See https://stackoverflow.com/questions/41083089/unhandled-promise-rejection-cannot-match-any-routes
  //6/15/2018 -- Scott FIX ME 
/** Add TestBed providers, compile, and create DashboardComponent */
//function compileAndCreate() {
  //beforeEach(async(() => {
    //const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    //const heroServiceSpy = jasmine.createSpyObj('HeroService', ['getHeroes']);

    //TestBed.configureTestingModule({
     // providers: [
        //{ provide: HeroService, useValue: heroServiceSpy },
       // { provide: Router,      useValue: routerSpy }
      //]
    //})
    //.compileComponents().then(() => {
      //fixture = TestBed.createComponent(AppComponent);
      //component = fixture.componentInstance;

      // getHeroes spy returns observable of test heroes
      //heroServiceSpy.getHeroes.and.returnValue(asyncData(getTestHeroes()));
    //});
  //}));
//}