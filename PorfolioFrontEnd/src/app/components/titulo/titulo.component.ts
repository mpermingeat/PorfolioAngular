import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.css']
})
export class TituloComponent implements OnInit {
  MatButtonModule = MatButtonModule
  constructor() { }

  ngOnInit(): void {
  }

}
