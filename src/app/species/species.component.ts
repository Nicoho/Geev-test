import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {
  species:any;
  

  constructor(private apiService: ApiService) { }
  ngOnInit() {
    this.apiService.getSpecies().subscribe((data)=>{
         this.species = data['results'];
      });
  }

  
}