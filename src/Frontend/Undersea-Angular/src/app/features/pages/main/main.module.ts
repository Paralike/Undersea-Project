import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main_routing';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent} from './components/header/header.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { ProfileCardComponent } from './components/profile-card/profile-card.component'
import { BuildingsComponent } from '../../buildings/components/buildings.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MainPageComponent,
    HeaderComponent,
    NavbarComponent,
    ProfileCardComponent,
    BuildingsComponent
  ],
  exports: [MainPageComponent, HeaderComponent,  NavbarComponent, ProfileCardComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
