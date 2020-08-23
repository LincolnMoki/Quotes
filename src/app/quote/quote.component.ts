import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote []= [
    new Quote('William James','Act as if what you do makes a difference. It does.)', new Date(2001,10,12)),
    new Quote('Winston Churchill','Success is not final, failure is not fatal: it is the courage to continue that counts.',new Date(1943,12,1)),
    new Quote('Helen Keller','Never bend your head. Always hold it high. Look the world straight in the eye.',new Date(2016,9,12)),
    new Quote('Zig Ziglar','What you get by achieving your goals is not as important as what you become by achieving your goals.',new Date(2018,6,12)),
    new Quote('Carol Burnett','When you have a dream, you have got to grab it and never let go.',new Date(2019,10,18)),
    ];
    addNewQuote(quote){
      quote.completeDate = new Date(quote.completeDate)
      this.quotes.push(quote)
    }
    displayDetails(index){
      this.quotes[index].showQuotes = !this.quotes[index].showQuotes;
    }
    deleteQuote(isComplete, index){
      if(isComplete){
        let toDelete=confirm('Are you sure you wanna delete'+ this.quotes[index] .inspquote +'?')
    
        if(toDelete){
          this.quotes.splice(index,1)
        }
      }
    
    }