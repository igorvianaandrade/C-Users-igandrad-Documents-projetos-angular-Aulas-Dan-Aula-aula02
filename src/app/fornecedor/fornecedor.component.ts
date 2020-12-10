import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Fornecedor} from './../model/fornecedor.model'

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

  fornecedor:Fornecedor = {nome:""};

  error:boolean = false;
  erroDesc:string = "";

  constructor(private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      console.log(params['id']);
      console.log(params['name']);
    });

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      var id = params['id'];

      if(id === 1){
        console.log("João");
      }else{
        console.log("Fornecedor nao encontrado");
      }
    });
  }

  onSend(){
    console.log(this.fornecedor);

    if(!this.fornecedor.nome){
      this.error =true;
      this.erroDesc="Prencha o nome";
    }else{
      this.error =false;
    }
  }
}
