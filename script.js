var scores, roundScore ,activrPlayer, dice;
initial();


document.querySelector('.dice').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
      var dice=Math.floor(Math.random()*6+1);

    document.querySelector('#current-' + activrPlayer).textContent=dice;

    var dicDom=document.querySelector('.dice');
    dicDom.style.display='block';
    dicDom.src='dice-'+dice+".png";


    if(dice !== 1){
        roundScore += dice;
        document.querySelector('#current-'+activrPlayer).textContent=roundScore;

       }else{
           
            nextPlayer();
       }

});
function initial(){
    scores=[0,0];
        roundScore=0;
        activrPlayer=0;
        document.getElementById('score-0').textContent=0;
        document.getElementById('score-1').textContent=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;
        document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',function(){
        initial();
})

document.querySelector('.btn-hold').addEventListener('click',function(){
    //add to gloabal Var
    scores[activrPlayer]+=roundScore;
    //update UI
    document.querySelector('#score-'+activrPlayer).textContent=scores[activrPlayer];
    //check winner

    if(scores[activrPlayer]>=100){
        document.querySelector('#name-'+activrPlayer).textContent="Winner!";
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activrPlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activrPlayer+'-panel').classList.remove('active');

    }

    nextPlayer();
});

function nextPlayer(){
    activrPlayer === 0 ? activrPlayer = 1 : activrPlayer=0; 
           roundScore=0;
           document.querySelector('#current-0').textContent='0';
           document.querySelector('#current-1').textContent='0';

           document.querySelector('.player-0-panel').classList.toggle('active');
           document.querySelector('.player-1-panel').classList.toggle('active');
           document.querySelector('.dice').style.display='none';
        //to add or Remove the class
        //    document.querySelector('.player-0-panel').classList.remove('active');
        //    document.querySelector('.player-1-panel').classList.add('active');
}