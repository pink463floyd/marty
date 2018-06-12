import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './test/test.component';
import {Test2Component} from './test2/test2.component';


const routes: Routes = [
  { path: '', redirectTo: '/metrics', pathMatch: 'full'},
  { path: 'subscriptions', component: Test2Component },
  { path: 'subscriptions/:id/:date', component: TestComponent },
  { path: 'metrics', component: Test2Component},
  { path: '**', component: Test2Component }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})


//+  declarations: [/* Test2Component */],
//+  imports: [/* RouterModule.forRoot(routes) */],
//+  exports: [RouterModule, routes /* routes */],

export class AppRoutingModule { }
