import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  inputValue: string = '';
name: any;
  buttonClicked() {
    console.log('Button clicked!');
    this.inputValue = ''; // Reset the inputValue
  }
}
