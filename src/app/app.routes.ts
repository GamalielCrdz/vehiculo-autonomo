import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { RobotControlComponent } from "./containers/robot-control/robot-control.component";
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'control/:id', component: RobotControlComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);