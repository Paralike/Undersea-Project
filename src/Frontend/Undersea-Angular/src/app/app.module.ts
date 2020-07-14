import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MainModule } from './features/pages/main/main.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpHandler, HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHelperService, JwtInterceptor, JWT_OPTIONS, JwtModule, } from '@auth0/angular-jwt';
import { TokenInterceptor } from './features/pages/auth/interceptor';
import { ArmyClient, CityClient, GameClient, UpgradeAttributeDto, UpgradeTypeClient, UpgradesClient } from './shared';
import { HeaderComponent } from './features/pages/main/components/header/header.component';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200']
      }
    })

  ],
  providers: [
    HttpClient,
    JwtHelperService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    ArmyClient,
    CityClient,
    GameClient,
    UpgradeTypeClient,
    UpgradesClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
