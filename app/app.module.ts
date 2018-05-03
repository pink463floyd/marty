import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { MlbRepoService} from './mlb-repo.service'
import { DateComponent} from './date/date.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatFormFieldModule, MatNativeDateModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component,
    DateComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
   BrowserAnimationsModule,
   MatDatepickerModule, MatNativeDateModule, MatInputModule,
   MatFormFieldModule, MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule
  ],
  providers: [MlbRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
