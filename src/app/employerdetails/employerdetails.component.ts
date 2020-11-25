import { Component, OnInit } from '@angular/core';
import { AbirdataserviceService } from '../abirdataservice.service';

@Component({
  selector: 'app-employerdetails',
  templateUrl: './employerdetails.component.html',
  styleUrls: ['./employerdetails.component.css']
})
export class EmployerdetailsComponent implements OnInit {

  public employdata=[];
  public errormsg;
  constructor(private dataservice: AbirdataserviceService) { }

  ngOnInit() {
    // this.employdata = this.dataservice.getabirdata();
    this.dataservice.getabirurldata().subscribe(data => this.employdata = data,
                                                error => this.errormsg = error );

  }

}
