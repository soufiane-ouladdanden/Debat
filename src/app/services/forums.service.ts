import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Debats } from '../Models/Debats';
import { of } from 'rxjs';
import { Message } from '../Models/Message';

@Injectable({
  providedIn: 'root'
})
export class ForumsService {


  constructor(public fireservices:AngularFirestore) {

    

   }

  create_Debat(subject: Debats){
    return this.fireservices.collection("Debats").add(Object.assign({}, subject));

  }

  get_allDebat(){

    return this.fireservices.collection("Debats").snapshotChanges();
    //return this.fireservices.collection("Subject").valueChanges();
  }

  async get_debatID(id:string){
    return this.fireservices.collection("Debats").doc(id).ref.get();
    //this.fireservices.collection("Subject/"+id).snapshotChanges();
    //this.fireservices.collection("Subject").doc(id).valueChanges();
  }

  create_Msg(Msg: Message,id: string){
    return this.fireservices.collection("Debats/"+id+"/Message").add(Object.assign({}, Msg));
  }

  get_allMsg(id: string){

    return this.fireservices.collection("Debats/"+id+"/Message").snapshotChanges();
    //return this.fireservices.collection("Subject").valueChanges();
  }

  //vote service 
  create_graphs(id: string){
  this.fireservices.collection('Debats').doc(id).collection('graphs').doc("graph").set({
    graph:true
  })}

  get_allQuestions(id: string){
    return this.fireservices.collection("Debats/"+id+"/graphs/graph/Questions").snapshotChanges();
  }

  get_allAnswers(id: string,id_questions: string){
    return this.fireservices.collection("Debats/"+id+"/graphs/graph/Questions/"+id_questions+"/Réponses").snapshotChanges();
  }

}