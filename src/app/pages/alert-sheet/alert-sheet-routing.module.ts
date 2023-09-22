import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertSheetPage } from './alert-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: AlertSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertSheetPageRoutingModule {}
