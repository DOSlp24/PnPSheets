import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SheetViewComponent } from './sheet-view/sheet-view.component';
import { SheetMakerComponent } from './sheet-maker/sheet-maker.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'sheet-view/:id',
    component: SheetViewComponent
  },
  {
    path: 'sheet-maker',
    component: SheetMakerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }
