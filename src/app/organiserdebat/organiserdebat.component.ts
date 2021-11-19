import { Component, OnInit } from '@angular/core';
import { Debats } from './../Models/Debats';
import { ForumsService } from '../services/forums.service';

@Component({
  selector: 'app-organiserdebat',
  templateUrl: './organiserdebat.component.html',
  styleUrls: ['./organiserdebat.component.css']
})
export class OrganiserdebatComponent implements OnInit {
  Debats: Debats[] | undefined;

  //Debats! : any[];
  authorName: string = "";
  title: string = "";
  container: string = "";
  theme: string = "";
  autres: string = "";
  type: string = "";
  typeRep: string = "";
  duree: Number = 0;
  selectedFile: any;
  img = new FormData();
  constructor(public forumsservice: ForumsService) { }

  themesList: string[] = ['Informatique', 'Sciences', 'Cinema', 'Sport', 'Cuisine', 'Autres'];

  ngOnInit(): void {
  }

  addSubject() {
    if (this.theme == "Autres") this.theme = this.autres;
    let subjectTmp: Debats = new Debats();
    subjectTmp.author = this.authorName;
    subjectTmp.title = this.title;
    subjectTmp.container = this.container;
    subjectTmp.theme = this.theme;
    subjectTmp.type = this.type;
    subjectTmp.date = new Date();

    this.forumsservice.create_Debat(subjectTmp).then(res => {
      this.authorName = "";
      this.title = "";
      this.container = "";
      this.theme = "";
      this.autres = "";
      this.type = "";
      this.forumsservice.create_graphs(res.id)
      console.log(res);
    }).catch(error => {
      console.log(error);
    });

  }

}