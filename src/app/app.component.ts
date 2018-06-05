import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
   
    
})
export class AppComponent {
   title = 'My Fist Angular App';
  title1= 'Võ Đức Lân';
  title2='Bùi Công Thành';
  title3 = 'Nguyễn Văn Toán';
  public cities =[
    {ID:1, Name: "Ha Noi"},
    {ID:2, Name: "TP HCM"}
  ];
  onSubmit(value:any)
  {

    console.log(value);
  }
 
}
