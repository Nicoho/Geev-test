import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})

export class PeopleComponent implements OnInit {

//peoples=[{name:"bob"},{name:"noub"}, {name:"rip"}];
peoples: any[];
@Input() peopleName;

 

  constructor() { }
  ngOnInit() {
          console.log(this.peopleName)
        
      }
    }
    
 
