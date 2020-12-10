import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*type MyArrayType = Array<{id:number, text:string}>

    var lista:MyArrayType = [{
      id:1, text:'Sentence1'
    }];*/

    /*for(var item of lista){ //for off loop
      console.log(item.id)
      console.log(item.text)
      console.log(item)
    }*/

    /*
    //for usando map(aerofunction)
    lista.map(item => {
      console.log(item.id);
      console.log(item.text);
      console.log(item);
    });*/
/*
    //for usando forEach(aerofunction)
    lista.forEach(item => {
      console.log(item.id);
      console.log(item.text);
      console.log(item);
    });*/
  }
    onSubmit(form:NgForm)
    {
      console.log(form);
    }  

    printNome(nome:string){
      console.log(nome);
    }

    onSubmitProd(form:NgForm)
    {
      console.log(form.value);
    }  
}
