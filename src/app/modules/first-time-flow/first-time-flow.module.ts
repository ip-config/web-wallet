import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { MatProgressBarModule } from '@angular/material';

import {
  FtfCreateComponent,
  FtfGenerateSeedComponent,
  FtfConfirmSeedComponent,
  FtfCreatePasswordComponent,
  FtfViewSeedComponent,
  FtfLoaderComponent
} from './containers';

import {
  SaveSeedPopupComponent,
  ReturnToSeedPopupComponent
} from './components';

import { FirstTimeFlowRoutingModule } from './first-time-flow-routing.module';

@NgModule({
  declarations: [
    FtfCreateComponent,
    FtfGenerateSeedComponent,
    FtfViewSeedComponent,
    FtfConfirmSeedComponent,
    FtfCreatePasswordComponent,
    SaveSeedPopupComponent,
    ReturnToSeedPopupComponent,
    FtfLoaderComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FirstTimeFlowRoutingModule,
    SharedModule,
    MatProgressBarModule
  ]
})
export class FirstTimeFlowModule { }
