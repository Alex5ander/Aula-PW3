import { Produto } from './../interface/produto';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixinha',
  templateUrl: './caixinha.component.html',
  styleUrls: ['./caixinha.component.css'],
})
export class CaixinhaComponent implements OnInit {
  @Input() produto: Produto | undefined;

  constructor() {}

  ngOnInit(): void {}
}
