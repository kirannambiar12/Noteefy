import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

note = [];
URL=[]
Image=[]
addnote ="";
addURL ="";
addImage ="";


pushit = function(){

  if(this.addnote == "" && this.addImage == "" && this.addURL == ""){
    alert("Sorry Add something in order to continue");
    }
      
  if(this.addnote != ""){
    this.note.push(this.addnote);
    this.addnote = "";
  }



  if(this.addImage != "" && this.addImage.match(/[@.]/)){
    this.URL.push(this.addImage);
    this.addImage = "";
  }


  var fileinput = (<HTMLInputElement>document.getElementById("file"));
  var filepath = fileinput.value;
  var allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (allowedExtensions.exec(filepath) ){
    
    if(fileinput.files && fileinput.files[0]){
      var reader = new FileReader();
      reader.onload = function(q) {
        document.getElementById("imagePreview").insertAdjacentHTML('beforeend','<img height="350" width="700" src ="'+reader.result+'"/>'); 
        
      };
      reader.readAsDataURL(fileinput.files[0]);

      this.Image.push(this.addURL);

      this.addURL = "";
  }
  
  }
  
 
}



deleteNote = function(index){
  this.note.splice(index,1)
}

deleteURL = function(index){

  this.URL.splice(index,1)
 
}

deleteImage = function(index){
  this.Image.splice(index,1)
}
  constructor() { }

  ngOnInit() {
  }

}
