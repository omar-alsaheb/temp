import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DashboardComponent,
        HomeComponent,
        SettingsComponent,
        ProfileComponent
    ]
})
export class DashboardModule { }
