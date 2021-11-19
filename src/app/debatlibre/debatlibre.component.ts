import { Component, OnInit } from '@angular/core';
import { ForumsService } from '../services/forums.service';
import { Debats } from './../Models/Debats';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../Models/Message';

@Component({
  selector: 'app-debatlibre',
  templateUrl: './debatlibre.component.html',
  styleUrls: ['./debatlibre.component.css']
})
export class DebatlibreComponent implements OnInit {
  id: any;
  message: string= "";
  authorName: string="";
  Msgs: Message[] | undefined;
  dates: string[] | undefined;



  constructor(private route: ActivatedRoute,public forumsservice:ForumsService,public Debat: Debats) {}

   ngOnInit(): void {
    this.id= this.route.snapshot.params.id;
    this.forumsservice.get_debatID(this.id).then(  (doc) => {
      if (doc.exists) {
        console.log(doc.data());
        this.Debat = doc.data() as Debats;
        console.log(this.Debat.author);
      } else {
        console.log("There is no document!");
      }
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    })
  console.log(this.id);
  console.log(this.forumsservice.get_debatID(this.id));

  this.forumsservice.get_allMsg(this.id).subscribe(data => {
    this.Msgs = data.map(e => {
      return {
        id : e.payload.doc.id,
      ...e.payload.doc.data() as Message
      };
      
    })
  });

  }

  DateTOString(date:Date ){
    return date.toISOString();
  }

  addMsg(){

      let MsgTmp :Message = new Message();
      MsgTmp.author= this.authorName;
      MsgTmp.message=  this.message;
      MsgTmp.date = new Date() ;
     
      console.log(MsgTmp.date);

       this.forumsservice.create_Msg(MsgTmp,this.id).then(res => {
         this.authorName = "";
         this.message = "";
         console.log(res);
       }).catch(error => {
         console.log(error);
       });   
  }
}
