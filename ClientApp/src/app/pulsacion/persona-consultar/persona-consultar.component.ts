import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { Persona } from '../models/persona';

@Component({
  selector: 'app-persona-consultar',
  templateUrl: './persona-consultar.component.html',
  styleUrls: ['./persona-consultar.component.css']
})
export class PersonaConsultarComponent implements OnInit {
  
  searchText: string = '';
  personas:Persona[];
  
  constructor(private personaService: PersonaService) { }

  get():void{
    this.personas=this.personaService.get()
  }
  ngOnInit() {this.get();}
}
