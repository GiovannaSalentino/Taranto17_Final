import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  a: String = "ciao";
  titoloSito: String = "Taranto17"

  attenzione() {
    alert("Il valore è cambiato. Il nuovo valore è " + this.a);
  }

  cambiaTitolo() {
    if (this.titoloSito == "Taranto17")
      this.titoloSito = "Viva Angular";
    else if (this.titoloSito == "Viva Angular")
      this.titoloSito = "Taranto17";
  }
}
