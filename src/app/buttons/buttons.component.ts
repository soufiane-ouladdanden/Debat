import { Component, Renderer2, ElementRef,OnInit,ViewChild } from '@angular/core';
import { AngularFirestore} from "@angular/fire/compat/firestore";
import { ActivatedRoute,Router } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Vote } from '../Models/Vote';
import { Voteanswers } from '../Models/Vote_answers';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  score!: number;
  chardata: any[] = [];
  charnames: any[] = [];
  chartOptions: any;
  subscribe: any;
  id_debat: any;
  Votes: Vote[] = [];

  VotesAnswers: Voteanswers[] = [];

  @ViewChild('answers', { static: false }) answers!: ElementRef;

  constructor(private el: ElementRef, private renderer:Renderer2,private firestore: AngularFirestore,
    public forumsservice:ForumsService,private route: ActivatedRoute,private router: Router) {
      this.id_debat= this.route.snapshot.params.id;
  }
  

  ngOnInit(): void {
    this.id_debat= this.route.snapshot.params.id;
    const br = this.renderer.createElement('br');

    //get list of questions and append to html
    this.forumsservice.get_allQuestions(this.id_debat).pipe(first()).subscribe(data => {
      data.map(f => {
        this.forumsservice.get_allAnswers(this.id_debat,f.payload.doc.id).pipe(first()).subscribe(data => {
          const titre = this.renderer.createElement('h1');
          const titreText = this.renderer.createText(f.payload.doc.get('content'));
          this.renderer.appendChild(titre, titreText);
          this.renderer.appendChild(this.el.nativeElement, titre);
          //get list of all answers inside each question and append to html
          data.map(e => {
            const a=e.payload.doc.data() as Voteanswers
            this.charnames.push(e.payload.doc.get('name'));
            //ajout bouton vote
            const button = this.renderer.createElement('button');
            const buttonText = this.renderer.createText(e.payload.doc.get('name'));
            this.renderer.appendChild(button, buttonText);
            this.renderer.setStyle(button,'background-color','#02a302');
            this.renderer.setStyle(button,'color','white');
            this.renderer.setStyle(button,'border-radius','8px');
            this.renderer.setStyle(button,'width','fit-content');
            this.renderer.setStyle(button,'padding-right','10px');
            this.renderer.setStyle(button,'padding-left','10px');
            this.renderer.setStyle(button,'margin-right','10px');
            this.renderer.setStyle(button,'font-size','large');



            this.renderer.appendChild(this.el.nativeElement, button);
            this.renderer.listen(button, 'click', () => {
              this.vote(f.payload.doc.id,e.payload.doc.id,e.payload.doc.get('name'),e.payload.doc.get('rate')); 
              this.renderer.setAttribute(button,'disabled','True'); 
              });                   
            }) 
                     //ajout bouton affichage graphe
         const buttonG = this.renderer.createElement('button');
         const buttonTextG = this.renderer.createText('Afficher le graphe');
         this.renderer.appendChild(buttonG, buttonTextG);
         this.renderer.setStyle(buttonG,'background-color','blue');
            this.renderer.setStyle(buttonG,'color','white');
            this.renderer.setStyle(buttonG,'border-radius','8px');
            this.renderer.setStyle(buttonG,'width','fit-content');
            this.renderer.setStyle(buttonG,'padding-right','6px');
            this.renderer.setStyle(buttonG,'padding-left','6px');
            this.renderer.setStyle(buttonG,'font-size','large');

         this.renderer.appendChild(this.el.nativeElement, buttonG);
         this.renderer.listen(buttonG, 'click', () => {this.showGraphe(f.payload.doc.id,this.id_debat);});
          });  
        })
      });
    }

  vote(id_questions:string,ID:string,name:string,Rate:number) {
    alert("vous avez voté :"+name)
    this.firestore.collection('Debats').doc(this.id_debat).collection('graphs').doc('graph').collection('Questions').doc(id_questions).collection('Réponses').doc(ID).update({rate:Rate+1});
  }

  showGraphe(id_questions:string,ID:string) {
    this.router.navigate(['vote-chart'], { queryParams: {
      GraphID:ID,
      QuestionID: id_questions,
    }});
  }
}
