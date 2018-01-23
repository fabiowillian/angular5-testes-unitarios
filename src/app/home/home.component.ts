import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  numero = 0;

  constructor() { }

  ngOnInit() {
  }

  aumentar() {
    this.numero++;
  }

  diminuir() {
    this.numero--;
  }

}
