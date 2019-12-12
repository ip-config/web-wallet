import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';

import {
  MatExpansionModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatTabsModule,
  MatSortModule,
  MatListModule,
  MatCardModule,
  MatProgressBarModule,
  MatTableModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatDialogModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FirstTimeFlowModule } from './modules/first-time-flow/first-time-flow.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { SendModule } from './modules/send/send.module';
import { WebsocketModule } from './modules/websocket';
import { StorageModule } from '@ngx-pwa/local-storage';

import { EffectsModule } from '@ngrx/effects';
import { WalletEffects } from './store/effects/wallet.effects';
import * as walletReducer from './store/index';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  entryComponents: [],
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FirstTimeFlowModule,
    WalletModule,
    SendModule,
    WebsocketModule.config({
      url: environment.ws
    }),
    // Material
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTabsModule,
    MatSortModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatDialogModule,
    StoreModule.forRoot(walletReducer.reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([WalletEffects]),
    StorageModule.forRoot({ IDBNoWrap: true }),
    StoreRouterConnectingModule.forRoot(),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
