import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavBarComponent } from './nav-bar/nav-bar.component'
import { SideBarComponent } from './side-bar/side-bar.component'
import { RevenueComponent } from './revenue/revenue.component'
import { TeamComponent } from './team/team.component'
import { ClientsComponent } from './clients/clients.component'
import { ProjectsComponent } from './projects/projects.component'
import { HomeComponent } from './pages/home/home.component'
import { SettingsComponent } from './pages/settings/settings.component'
import { MeetingsComponent } from './pages/meetings/meetings.component'
import { CallsComponent } from './pages/calls/calls.component'
import { AnalyticsComponent } from './pages/analytics/analytics.component'
import { TeamPageComponent } from './pages/team-page/team-page.component'

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'teams', component: TeamPageComponent },
    { path: 'calls', component: CallsComponent },
    { path: 'meetings', component: MeetingsComponent },
    { path: 'analytics', component: AnalyticsComponent },
    { path: 'settings', component: SettingsComponent },
]

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        SideBarComponent,
        RevenueComponent,
        TeamComponent,
        ClientsComponent,
        ProjectsComponent,
        AnalyticsComponent,
        CallsComponent,
        HomeComponent,
        MeetingsComponent,
        SettingsComponent,
        TeamPageComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
