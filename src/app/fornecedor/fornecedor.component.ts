import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {

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

}
