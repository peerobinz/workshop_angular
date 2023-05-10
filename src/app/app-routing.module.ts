import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Movie1Component } from './movie1/movie1.component';
const routes: Routes = [
  {
    path: '', redirectTo: 'movie1', pathMatch: 'full'
  }
  ,
  {
    path : 'movie1', component : Movie1Component 
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
