import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertSheetPageRoutingModule } from './alert-sheet-routing.module';

import { AlertSheetPage } from './alert-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertSheetPageRoutingModule
  ],
  declarations: [AlertSheetPage]
})
export class AlertSheetPageModule {}
