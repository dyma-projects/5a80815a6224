import {Component, OnInit, ViewChild, ElementRef, DoCheck} from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit, DoCheck {

  @ViewChild('f') public inputRef: ElementRef;
  public valeur: string;



  constructor() { }

  ngOnInit() {
    console.log(this.inputRef.nativeElement.value);
  }

  ngDoCheck() {
   this.valeur = this.inputRef.nativeElement.value;
    console.log(this.inputRef.nativeElement);
  }

}
