import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

name:string;
peoples: any[];
 

  constructor(private apiService:ApiService) { }
  ngOnInit() {
        this.peoples=this.apiService.people;
        this.name=this.apiService.specie;     
       }
    }
    
 
