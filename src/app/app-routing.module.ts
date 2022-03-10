import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RegionDetailsComponent} from "./region-details/region-details.component";
import {DepartementDetailsComponent} from "./departement-details/departement-details.component";
import {CommuneListComponent} from "./commune-list/commune-list.component";

const routes: Routes = [
  {path : "", component:RegionDetailsComponent},
  {path:"region/:idRegion/departement", component:DepartementDetailsComponent},
  {path :"departements/:idDepartement/commune", component:CommuneListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
