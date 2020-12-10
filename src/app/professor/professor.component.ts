import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.css']
})
export class ProfessorComponent implements OnInit {

  @Input() numero:number = 0;
  @Output()metodo = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.numero);

    type MyArrayType = Array<{id:number, text:string}>

    var lista:MyArrayType = [{
      id:1, text:'Sentence1'
    }];

    this.metodo.emit(lista);
  }

}
