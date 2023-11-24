import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { DriversComponent } from './drivers/drivers.component';
import { TripslofComponent } from './tripslof/tripslof.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FuelhistoryComponent } from './fuelhistory/fuelhistory.component';
import { LocationsComponent } from './locations/locations.component';
import { ReportsComponent } from './reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'vehicles',
    component: VehiclesComponent,
  },
  {
    path: 'drivers',
    component: DriversComponent,
  },
  {
    path: 'Tripslof',
    component: TripslofComponent,
  },
  {
    path: 'Calendar',
    component: CalendarComponent,
  },
  {
    path: 'Fuelhistory',
    component: FuelhistoryComponent,
  },
  {
    path: 'Locations',
    component: LocationsComponent,
  },
  {
    path: 'Reports',
    component: ReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
