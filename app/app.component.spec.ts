import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { RouterModule, Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
import {MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'
import {DateUtilitiesService} from './date-utilities.service'
import {routes} from './app-routing.module'
import {StandingsComponent} from './standings/standings.component';
import {Test2Component} from './test2/test2.component'
import { FilterPipe} from './filter.pipe';

import { ComponentFixture } from '@angular/core/testing';

class RouterStub {
  navigateByUrl(url: string) {
    return url;
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DateComponent, StandingsComponent, Test2Component, FilterPipe],
      providers : [DateUtilitiesService],
      imports: [BrowserAnimationsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule]//,
     //RouterModule.forRoot(routes)]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  /*
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let component = fixture.componentInstance;
    let h2 = fixture.nativeElement.querySelector('h2');
    console.log(h2);
    console.log("bobby")
    
    //const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h2').textContent).toContain('Welcome to app!');
    
  }));
  */
});

 describe('AppComponent (minimal)', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, DateComponent, StandingsComponent, Test2Component, FilterPipe],
      providers : [DateUtilitiesService],
      imports: [BrowserAnimationsModule, 
        MatInputModule, 
        MatFormFieldModule, 
        FormsModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        RouterTestingModule]
    });
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});


describe('Minimal AppComponent (with beforeEach)', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [AppComponent, DateComponent, StandingsComponent, Test2Component, FilterPipe],
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
});



