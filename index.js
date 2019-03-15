

var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var alligator = "";

pronoun.forEach((pronoun) =>{
    adj.forEach((adj) =>{
        noun.forEach((noun) =>{
            alligator += pronoun + adj + noun + '.com' + '<br>';
            
        });
        
    });
    
});
   
    


document.querySelector("p").innerHTML = alligator;

