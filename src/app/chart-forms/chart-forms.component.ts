import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-chart-forms',
  templateUrl: './chart-forms.component.html',
  styleUrls: ['./chart-forms.component.css']
})
export class ChartFormsComponent {
    id_debat: any;
    VoteForm!: FormGroup;

  constructor(private firestore: AngularFirestore,private fb:FormBuilder,     
    private router: Router,private route: ActivatedRoute) {
    this.VoteForm = this.fb.group({
      question: '',
      answers: this.fb.array([]) ,
    });
   }

   answers() : FormArray {
    return this.VoteForm.get("answers") as FormArray
  }
   
  newAnswers(): FormGroup {
    return this.fb.group({
      answer: '',
    })
  }
   
  addAnswers() {
    this.answers().push(this.newAnswers());
  }
   
  removeAnswers(i:number) {
    this.answers().removeAt(i);
  }



  onSubmitQuestion() {
    this.id_debat= this.route.snapshot.params.id;
    var id!:string

    this.firestore.collection('Debats').doc(this.id_debat).collection('graphs').doc('graph').collection('Questions').add({
    content: this.VoteForm.value.question,
    })
    .then(res => {
        id=res.id;
        this.VoteForm.value.answers.forEach((elmnt: any) => {
          this.onSubmitAnswer(res.id,elmnt.answer);
        });
        window.location.reload();
        // this.router.navigate(['vote-chart'], { queryParams: {
        //   QuestionID: res.id,
        // }});
    })
    .catch(e => {
        console.log(e);
    })
 

}

  onSubmitAnswer(id:string,name:string){
    this.firestore.collection('Debats').doc(this.id_debat).collection('graphs').doc('graph').collection('Questions').doc(id).collection('Réponses').add({
      name: name,
      rate: 0
  })
  .then(res => {
      console.log(res);
      this.VoteForm.value.reset();
      
  })
  .catch(e => {
      console.log(e);
  })
  

  }
}


