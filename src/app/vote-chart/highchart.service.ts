import { ElementRef, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";
import {map} from "rxjs/operators";
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HighchartService {
  private IdQuestion!: string;
  private IdGraph!: string;

  private rateCollection: AngularFirestoreCollection<chartModal>;
  rates$: Observable<chartModal[]>;

  constructor(private readonly firestoreservice: AngularFirestore,
    private router: Router,
    private activeRoute: ActivatedRoute) {

    this.IdQuestion=activeRoute.snapshot.queryParams.QuestionID;
    this.IdGraph=activeRoute.snapshot.queryParams.GraphID;

    this.rateCollection = firestoreservice.collection<chartModal>('Debats').doc(this.IdGraph).collection('graphs').doc('graph').collection('Questions').doc(this.IdQuestion).collection('Réponses')
    // .snapshotChanges() returns a DocumentChangeAction[], which contains
    // a lot of information about "what happened" with each change. If you want to
    // get the data and the id use the map operator.
    this.rates$ = this.rateCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as chartModal;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

}
export interface chartModal
{
  name:string,
  rate:number
}