import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { Subject } from './../Models/Subject';

@Component({
  selector: 'app-form-f',
  templateUrl: './form-f.component.html',
  styleUrls: ['./form-f.component.css']
})
export class FormFComponent implements OnInit {

  Subjects?:Subject[];

  authorName:string = "";
  title:string = "";
  container:string = "";
  theme:string = "";
  autres: string ="";
  type: string="";
  typeRep: string="";
  duree: Number=0;

  constructor() { }

  ngOnInit(): void {

    this.Subjects = [
      {
        author:'hicham',
        title:'testing',
        container:'hello world',
        theme: 'testing',
        type: 'libre'
      }
    ]
  }

  addSubject(){
    if (this.theme == "Autres") this.theme = this.autres;

    this.Subjects?.push({
      author: this.authorName,
      title: this.title,
      container: this.container,
      theme: this.theme,
      type: this.type
    });

      this.authorName = "";
      this.title = "";
      this.container = "";
      this.theme = "";
      this.autres = "";
      this.type = "";
  }

}
