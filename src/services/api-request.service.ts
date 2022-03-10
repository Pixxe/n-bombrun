import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Region} from "../models/region";
import {Departements} from "../models/departement";
import {Commune} from "../models/commune";

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  private rawUrl : string = 'https://geo.api.gouv.fr/'
  private urlRegion : string = 'regions'

  constructor(private httpClient : HttpClient) { }

  getRegion() : Observable<Array<Region>>{
    return this.httpClient.get<Array<Region>>(this.rawUrl + this.urlRegion );
  }

  getDepartements(regionCode : string) : Observable<Array<Departements>>{
    return this.httpClient.get<Array<Departements>>(this.rawUrl + this.urlRegion +'/' + regionCode + "/departements")
  }

  getCommune(commune : string): Observable<Array<Commune>>{
    return this.httpClient.get<Array<Commune>>(this.rawUrl + this.urlRegion + '/' + commune + "/commune");
  }
}
