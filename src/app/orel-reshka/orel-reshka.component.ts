import { Component } from '@angular/core';

@Component({
  selector: 'app-orel-reshka',
  templateUrl: './orel-reshka.component.html',
  styleUrls: ['./orel-reshka.component.css']
})
export class OrelReshkaComponent {
  result!: string;
  choice!: string;

  rndCoin() {
    const rnd = Math.random()
    const tmp = rnd < 0.5 ? "Orel":"Reshka"
    if (this.choice == tmp) {
      this.result = "Вы выиграли";
    }
    else {
      this.result ="Вы проиграли";
    }
  }
}
