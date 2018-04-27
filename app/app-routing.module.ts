import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestComponent} from './test/test.component';
import {Test2Component} from './test2/test2.component';


const routes: Routes = [
  { path: 'subscriptions', component: TestComponent },
  { path: 'subscriptions/:id', component: TestComponent },
  { path: 'metrics', component: Test2Component},
  { path: '', component: TestComponent},
  { path: '**', component: TestComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
