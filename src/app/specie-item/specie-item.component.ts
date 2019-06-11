import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-specie-item',
  templateUrl: './specie-item.component.html',
  styleUrls: ['./specie-item.component.css']
})
export class SpecieItemComponent implements OnInit {
 @Input() specieName: string;
 @Input() index:number;
 @Input() people:any[];
peoples;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    
  }


  onPeople(){
    this.apiService.getPeoples(this.people[0]).subscribe((data)=>{
      this.peoples = data['name'];
    
     
   });
    //this.router.navigate([`species/${this.index}`]);
    
  }
}
