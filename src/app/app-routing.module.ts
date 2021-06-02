import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DisplayComponent } from './components/display/display.component';


const routes: Routes = [
  {path: "", component: DestinationsComponent},
  {path: "display", component: DisplayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
