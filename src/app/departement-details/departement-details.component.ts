import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../services/api-request.service";
import {Departements} from "../../models/departement";


@Component({
  selector: 'app-departement-details',
  templateUrl: './departement-details.component.html',
  styleUrls: ['./departement-details.component.scss']
})
export class DepartementDetailsComponent implements OnInit {

  regionParam : string ="";
  departementbyRegion: Array<Departements> = [];



  constructor(
    private activateRoute : ActivatedRoute,
    private apiService : ApiRequestService
) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((paramRoute)=>{
      this.regionParam = paramRoute['idRegion']
      console.log(this.regionParam)
    });
    if (this.regionParam){
      this.apiService.getDepartements(this.regionParam).subscribe((jsonResponse)=>{
        console.log(jsonResponse)
        this.departementbyRegion = jsonResponse;
      })
    }
  }

}
