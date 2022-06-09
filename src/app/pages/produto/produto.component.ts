import { Produto } from './../../interface/produto';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent implements OnInit {
  url = 'http://lucasreno.kinghost.net/loja/produto/';
  urlProdutos = 'http://lucasreno.kinghost.net/loja/produtos';
  produto: Produto | undefined = undefined;
  produtos: Produto[] = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.http.get<Produto[]>(this.urlProdutos).subscribe((produtos) => {
        this.produtos = produtos;
      });

      this.http.get<Produto[]>(this.url + params['id']).subscribe((produto) => {
        this.produto = produto[0];
      });
    });
  }
}
