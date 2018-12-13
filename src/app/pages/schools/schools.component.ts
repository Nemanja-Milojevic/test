import { Component, OnInit } from '@angular/core';
import { SchoolsService } from './schools.service';

@Component({
  selector: 'schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  public listOfOrganizations;

  constructor(private service: SchoolsService) { }

  ngOnInit() {
    this.get()
  }

  get(){
    this.service.getOrganizations().subscribe(
      res => {
        this.listOfOrganizations = res;
      },
      err => {
        console.log(err)
      }
    )
  }

}
