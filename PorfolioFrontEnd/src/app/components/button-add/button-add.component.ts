import { Component, OnInit } from '@angular/core';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {
faSquarePlus = faSquarePlus;
  constructor() { }

  ngOnInit(): void {
  }

}
