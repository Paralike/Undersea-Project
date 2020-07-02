import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main_routing';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent} from './components/header/header.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ProfileCardComponent } from './components/profile-card/profile-card.component'



@NgModule({
  declarations: [MainPageComponent, HeaderComponent, NavbarComponent, ProfileCardComponent],
  exports: [MainPageComponent, HeaderComponent,  NavbarComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
