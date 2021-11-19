import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../services/forums.service';
import { Debats } from './../Models/Debats';

@Component({
  selector: 'app-tousdebats',
  templateUrl: './tousdebats.component.html',
  styleUrls: ['./tousdebats.component.css']
})
export class TousdebatsComponent implements OnInit {
  Debats : Debats[] | undefined;
  
  name = 'Angular';
  imageObject = [{
      Image: "../../assets/images/live.png",
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet1'
  }, {
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
     title: 'Sujet'
  }, {
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet3'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title: 'Sujet4'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet5'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet6'
  },{
      image: '../../assets/images/live.png',
      thumbImage: '../../assets/images/live.png',
      title:'Sujet7'
  }
  ];
  constructor(public forumsservice:ForumsService) { }

  ngOnInit(): void {
    this.forumsservice.get_allDebat().subscribe(data => {
      this.Debats = data.map(e => {
        return {
          id : e.payload.doc.id,
        ...e.payload.doc.data() as Debats
        };
        
      })
    });
      }
    }
