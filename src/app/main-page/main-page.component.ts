import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  letters = ['M', 'A', 'K', 'S', 'M', 'I', 'H', 'A', 'M', 'A', 'K', 'S'];
  first = true;
  pos1 = 0;
  pos2 = 0;
  temp = ''
  changeLetters(position: string) {
    if (this.first) {
      this.pos1 = Number(position);
      this.first = false;
    } else {
      this.pos2 = Number(position);
      this.temp = this.letters[this.pos1];
      this.letters[this.pos1] = this.letters[this.pos2];
      this.letters[this.pos2] = this.temp;
      this.first = true;

    }
  }
}
