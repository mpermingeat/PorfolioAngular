import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
habilidadesList: any;
  //para infectar servicios lo hacemos en el constructor
  constructor(private datosPortfolio:PortfolioService) { }

  //aca nos suscribimos al servicio para escuchar las respuestas
  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      this.habilidadesList= data.habilidades;
    });
  }

}
