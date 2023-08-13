import { Component} from '@angular/core';
;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    searchWord =''
   
    filters:string[] = []

    temp: any = localStorage.getItem('cards')
    collection = JSON.parse(this.temp)
    displayCards:any = this.cardsToDisplay()


    setWord(event:any){
        if(event.target.value == '' && this.filters.length == 0){
            this.searchWord =''
            this.displayCards = this.cardsToDisplay()
            return
        } 
        
        if(event.target.value == '' && this.filters.length != 0){
            this.searchWord =''
            this.displayCards = this.cardsToDisplay()
            return
        }
            this.searchWord = event.target.value[0].toUpperCase() + event.target.value.slice(1);
            this.cardsToDisplay()
        
    }

    cardsToDisplay(){
        var temp = []

        //no filters and no search word
        if(this.filters.length == 0 && this.searchWord == ''){
            temp = this.collection
            console.log('displaying all cards')
            return temp
        }

        // no filters but there is a search word
        if(this.filters.length == 0 && this.searchWord != ''){
            for(let i =0; i< this.collection.length; i++){
                if(this.collection[i].name.includes(this.searchWord)){
                    temp.push(this.collection[i])
                }
            }   
            this.displayCards = temp
            return temp
        }

        //there is a filter and a search word
        if(this.filters.length != 0 && this.searchWord != ''){
            for(let i =0; i< this.collection.length; i++){
                if(this.filters.includes(this.collection[i].deck) && this.collection[i].name.includes(this.searchWord)){
                    temp.push(this.collection[i])
                }
            }
    
            
            this.displayCards = temp
            return temp
        }
        //there is a filter and no search word
        if(this.filters.length != 0 && this.searchWord == ''){
            for(let i =0; i< this.collection.length; i++){
                if(this.filters.includes(this.collection[i].deck) ){
                    temp.push(this.collection[i])
                }
            }
    
            
            this.displayCards = temp
            return temp
        }

    }

    addCardToCollection(card: any){
        for(let i = 0; i < this.collection!.length; i++){
            if(card['card_code'] == this.collection[i].card_code){

                if(card['collected'] == 'true'){
                    this.collection[i].collected = 'false';
                    console.log(this.collection[i].collected);
                    localStorage.setItem('cards', JSON.stringify(this.collection));
                    
                }else{
                    this.collection[i].collected = 'true';
                    console.log(this.collection[i].collected);
                    localStorage.setItem('cards', JSON.stringify(this.collection));
                    break;
                }
            }
        }
        console.log(this.filters)
    }

}
