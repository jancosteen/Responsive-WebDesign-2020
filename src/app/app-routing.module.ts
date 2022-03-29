import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chapter1Component } from './chapter1/chapter1.component';

const routes: Routes = [
  {path: 'chapter1', component: Chapter1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
