import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.css']
})
export class AddProdutoComponent implements OnInit {

  imageURL: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  

  getImage(e:any) {
    console.log(e)
    this.imageURL = e.target.value;
  }
}
