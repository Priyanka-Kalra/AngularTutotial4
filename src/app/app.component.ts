import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  name: string = "";
  displayName: string="";

  email:string="";
  displayEmail:string="";

  getName(){
    this.displayName= this.name;
  }

  setName(event:Event){
    this.name=(event.target as HTMLInputElement).value;

  }

  getEmail(val:string){
    this.email=val;
    this.displayEmail= val;
  }
}
