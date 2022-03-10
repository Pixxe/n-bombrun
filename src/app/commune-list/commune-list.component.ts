import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiRequestService} from "../../services/api-request.service";
import {Commune} from "../../models/commune";

@Component({
  selector: 'app-commune-list',
  templateUrl: './commune-list.component.html',
  styleUrls: ['./commune-list.component.scss']
})
export class CommuneListComponent implements OnInit {

  arrayCommune : Array<Commune> = [];

  constructor(private activatedRoute : ActivatedRoute, private apiService : ApiRequestService) { }


  ngOnInit(): void {
  }

}
