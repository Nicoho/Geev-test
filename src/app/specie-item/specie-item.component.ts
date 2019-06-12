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
  @Input() people:any[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
  }

  onPeople (){
    this.apiService.people=this.people;
    this.apiService.specie=this.specieName;
    this.router.navigate(["specie"]);
  }
}

