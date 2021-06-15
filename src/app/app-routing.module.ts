import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { SeatingComponent } from './components/seating/seating.component';
import { SummaryComponent } from './components/summary/summary.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { IsLoggedInGuard } from './guards/is-logged-in.guard';


const routes: Routes = [
  {path: "", component: DestinationsComponent},
  {path: "seating", component: SeatingComponent, canActivate: [IsLoggedInGuard]},
  {path: "summary", component: SummaryComponent, canActivate: [IsLoggedInGuard]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
