import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExclamationPipe } from './pipes/exclamation.pipe';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ExclamationPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pipes-demo';
  today:Date = new Date();
  price:number = 123.4567;
  percentage:number = 0.1234;
  user = {name: 'John', age: 25};
}
