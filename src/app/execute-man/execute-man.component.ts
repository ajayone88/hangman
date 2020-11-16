import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { categorie } from 'src/shared/categorie.modal';
import { apiService } from 'src/shared/service/api.service';
import { categorieService } from 'src/shared/service/categorie.service';

@Component({
  selector: 'app-execute-man',
  templateUrl: './execute-man.component.html',
  styleUrls: ['./execute-man.component.css']
})
export class ExecuteManComponent implements OnInit {

  categorie: categorie;
  question: string;
  correctAnswer: string;
  incorrectAnswer: string;
  coveredAnswer: string[];
  cards: string[];
  constructor(private categorieService: categorieService,
              private route: ActivatedRoute,
              private apiService: apiService) { }

  ngOnInit() {
    this.cards = [];
    this.route.params
    .subscribe((param: Params) =>{
      this.categorie = this.categorieService.getCategorie(param.id);
      this.apiService.getQuestions(1, param.id).then(output =>{
        const data = output.data;
        console.log(data);
        if(data.response_code === 0){
          this.question = data.results[0].question
          this.correctAnswer = data.results[0].correct_answer;
          this.incorrectAnswer = data.results[0].incorrect_answers[0];
          this.coveredAnswer = Array(this.correctAnswer.length).fill("-");
          this.cards = (this.correctAnswer.toLocaleUpperCase() + this.incorrectAnswer.toLocaleUpperCase()).split('');
          console.log("Cards : - " + this.cards);
          let mySet  = new Set(this.cards);
          console.log(mySet);
          this.cards = [...mySet];
          console.log(this.cards);
        }
      });
    });
  }
}