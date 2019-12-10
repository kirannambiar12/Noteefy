import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  txt = []
adtxt = "";

pushitem = function(){
  if(this.adtxt != ""){
this.txt.push(this.adtxt);
this.adtxt = "";
  }
}

deleteList = function(index){
  this.txt.splice(index,1);

}
  
  constructor() { }

  ngOnInit() {
  }

}
