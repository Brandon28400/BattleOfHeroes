import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  bouton1() {document.getElementById("card7").style.borderColor = "gold";}
  bouton2() {document.getElementById("card8").style.borderColor = "gold";}
  bouton3() {document.getElementById("card9").style.borderColor = "gold";}
  bouton4() {document.getElementById("card10").style.borderColor = "gold";}
  bouton5() {document.getElementById("card11").style.borderColor = "gold";}
  bouton6() {document.getElementById("card12").style.borderColor = "gold";}

}
