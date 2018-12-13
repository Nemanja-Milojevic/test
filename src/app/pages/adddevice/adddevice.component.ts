import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AdddeviceService } from './adddevice.service';

@Component({
  selector: 'adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss']
})
export class AdddeviceComponent implements OnInit {

  public device = {
    type: null,
    date_activated: null,
    date_purchase: null,
    serial: null
  }

  constructor(private service: AdddeviceService) { }

  ngOnInit() {
  }

  addDevice(){
    let pipe = new DatePipe('en-GB');
    let now = Date.now()
    let time = pipe.transform(now, 'HH:mm:ss')
    let created = pipe.transform(this.device.date_activated, 'yyyy-MM-dd')
    let modified = pipe.transform(this.device.date_purchase, 'yyyy-MM-dd')
    let dateC = created + "T" + time   
    let dateM = modified + "T" + time

    let data = {
      type: null,
      date_activated: null,
      date_purchase: null,
      serial: null
    }

    data.type = this.device.type;
    data.date_activated = dateC;
    data.date_purchase = dateM;
    data.serial = this.device.serial
    this.service.addDevice(data).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
