import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private httpClient: HttpClient) { }

  people:any[];
  specie:string;

  getSpecies(){
    return this.httpClient.get(`https://swapi.co/api/species/`);
}

getPeoples (people){
  return this.httpClient.get(people);
}

}