import { Categoria } from './../../interface/categoria';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  categorias: Categoria[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.http.get<Categoria[]>("http://www.lucasreno.kinghost.net/loja/home").subscribe(resposta => {
     this.categorias = resposta;
   });
  }

}
