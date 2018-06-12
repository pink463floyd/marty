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
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  */
});
