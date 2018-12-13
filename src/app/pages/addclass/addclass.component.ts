import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.scss']
})
export class AddclassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  add(data){
    let hash = btoa(data)
    console.log(hash)
    let string = atob(hash)
    console.log(string)
  }

}
