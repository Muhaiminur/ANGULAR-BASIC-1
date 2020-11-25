import { Component, OnInit } from '@angular/core';
import { AbirdataserviceService } from '../abirdataservice.service';

@Component({
  selector: 'app-employerlist',
  templateUrl: './employerlist.component.html',
  styleUrls: ['./employerlist.component.css']
})
export class EmployerlistComponent implements OnInit {


  // public employdata=[
  //   {"id":1,"name":"abir1","age":17},
  //   {"id":2,"name":"abir2","age":17},
  //   {"id":3,"name":"abir3","age":17},
  //   {"id":4,"name":"abir4","age":17},
  //   {"id":5,"name":"abir5","age":17}
  // ]
  public employdata=[];
  constructor(private dataservice: AbirdataserviceService) { }

  ngOnInit() {
    this.employdata = this.dataservice.getabirdata();
  }

}
