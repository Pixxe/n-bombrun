import { Component, OnInit } from '@angular/core';
import {ApiRequestService} from "../../services/api-request.service";
import {Region} from "../../models/region";

@Component({
  selector: 'app-region-details',
  templateUrl: './region-details.component.html',
  styleUrls: ['./region-details.component.scss']
})
export class RegionDetailsComponent implements OnInit {

  myRegions : Array<Region> |undefined = []

  constructor(private apiRequestService : ApiRequestService) { }

  ngOnInit(): void {
    this.apiRequestService.getRegion().subscribe((jsonResponse)=>{
      this.myRegions = jsonResponse;
      console.log(this.myRegions)
    });
  }

}
