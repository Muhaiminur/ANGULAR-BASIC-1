import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  // selector: 'app-gtech',
  selector: 'app-gtech',
  templateUrl: './gtech.component.html',
  styleUrls: ['./gtech.component.css']
})
export class GtechComponent implements OnInit {

  public inputevent="";
  public name="GSERIES";
  public siteurl=window.location.href;
  public inputid="gtechid";
  public isdisable= true ;
  public redcolor="text-danger";
  public hasError = true;

  public ifelsedisplay=true;
  //public switchcolor="blue";

  public forarray=["abir1","abir2","abir3","abir4","abir5"];

  @Input('parentData') public datafromparent;

  @Output() public childevent=new EventEmitter();

  public result="RESULT CHECK";
  
  constructor() { }

  ngOnInit() {
  }

  getName(){
    return "METHOD NAME "+this.name;
  }
  welcome(){
    this.name="WELCOME CLICKED";
  }
  logMessage(value){
    console.log(value)
    this.result=value;
  }
  senddata(){
    this.childevent.emit("FROM CHILD GTECH");
  }

}
