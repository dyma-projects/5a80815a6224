import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input('') compteur: number;
  @Output('') result: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  public plus(): void {
    this.compteur++;
    this.result.emit(this.compteur)
    console.log(this.compteur);
  }

  public moins(): void {
    this.compteur--;
    this.result.emit(this.compteur);
    console.log(this.compteur);
  }

  ngOnInit() {
  }

}
