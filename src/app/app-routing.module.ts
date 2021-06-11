import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { SeatingComponent } from './components/seating/seating.component';
import { SummaryComponent } from './components/summary/summary.component';


const routes: Routes = [
  {path: "", component: DestinationsComponent},
  {path: "seating", component: SeatingComponent},
  {path: "summary", component: SummaryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
