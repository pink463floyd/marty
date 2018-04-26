import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test2Component } from './test2/test2.component';
import { MlbRepoService} from './mlb-repo.service'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test2Component
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
  ],
  providers: [MlbRepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
