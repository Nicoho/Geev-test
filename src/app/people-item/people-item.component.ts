import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-people-item',
  templateUrl: './people-item.component.html',
  styleUrls: ['./people-item.component.css']
})

export class PeopleItemComponent implements OnInit {
 @Input() url:string;
 name:string;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getPeoples(this.url).subscribe((data)=>{
       this.name = data['name'];
   });
  }
}
