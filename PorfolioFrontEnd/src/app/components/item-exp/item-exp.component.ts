import { Component, OnInit } from '@angular/core';
import { faTimes, faPencil } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-item-exp',
  templateUrl: './item-exp.component.html',
  styleUrls: ['./item-exp.component.css']
})
export class ItemExpComponent implements OnInit {
  faTimes = faTimes;
  faPencil = faPencil;
  

  constructor() { }

  ngOnInit(): void {
  }

}
