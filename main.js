 
function newGame(){
                    

                    var  items = ['fa fa-imdb','fa fa-imdb','fa fa-check-square','fa fa-check-square', 
                    'fa fa-database','fa fa-database', 'fa fa-diamond', 'fa fa-diamond', 'fa fa-cutlery',
                    'fa fa-cutlery','fa fa-tachometer','fa fa-tachometer','fa fa-taxi','fa fa-taxi',
                    'fa fa-bug','fa fa-bug','fa fa-bomb','fa fa-bomb','fa fa-bicycle','fa fa-bicycle',
                    'fa fa-birthday-cake','fa fa-birthday-cake','fa fa-bolt','fa fa-bolt','fa fa-bell',
                    'fa fa-bell','fa fa-bath','fa fa-bath','fa fa-beer','fa fa-beer','fa fa-asterisk',
                    'fa fa-asterisk','a fa-user-circle','a fa-user-circle','fa fa-fighter-jet',
                    'fa fa-fighter-jet','fa fa-cog','fa fa-cog','fa fa-key','fa fa-key',
                    'fa fa-laptop','fa fa-laptop','fa fa-leaf','fa fa-leaf','fa fa-gavel',
                    'fa fa-gavel','fa fa-magnet','fa fa-magnet','fa fa-lock','fa fa-lock',
                    'fa fa-male','fa fa-male','fa fa-moon-o','fa fa-moon-o','fa fa-paper-plane',
                    'fa fa-paper-plane','fa fa-money', 'fa fa-money','fa fa-map-o','fa fa-map-o',
                    'fa fa-microphone','fa fa-microphone','fa fa-lightbulb-o','fa fa-lightbulb-o'];

                    var gamecontainer = document.getElementsByClassName('gamecontanier')[0];
                       
 
                    createTable();

                    function createTable() {
                        var text = '';
                                                    
                        	  for(var i=0; i<64; i++){
                        	                                
                                // var oneitem = 0;
                        	    var oneitem = Math.floor(Math.random()*items.length);
                        	    text += '<div class="box"> <div class="back"><i class="'+ items[oneitem] +'" aria-hidden="true"></i></div> <div class= "front"><i class="'+ items[oneitem] +'" aria-hidden="true"></i></div> </div>';
                        	    items.splice(oneitem,1);
                                                    	    
                            }	
                         
                        gamecontainer.innerHTML = text;

                    }
                    
                    clickMe()

                    function clickMe(){
                        clickTwo = [];
                        var box = document.getElementsByClassName('box');
                        var front = document.getElementsByClassName('front');
                        var back = document.getElementsByClassName('back');
                        var inner = document.getElementsByTagName('i');
                        var numCliks = 0;
                        var match =0;
                      
                                
                    	    for(var i=0; i<64; i++){
                                      
                                          back[i].addEventListener('click', function(){ 
                    	                       this.style.transform ='perspective(900px) rotateY(0deg)';                                     
                                          });
                                          

                                          front[i].addEventListener('click', function(){ 
                    	                       this.style.transform ='perspective(900px) rotateY(180deg)';
                                             clickTwo.push(this);                                                             
                        			               numCliks ++; 
                        	                
                              			         if(numCliks === 2){  
                                                              
                                                            if(clickTwo[0].innerHTML == clickTwo[1].innerHTML){
                                                                  
                                                                  numCliks=0;
                                                                  clickTwo=[];
                                                              

                                                                      gameduration = gameduration + 15;
                                                                      counter = counter-15;
                                                                      addtimer.innerHTML = 'Dobio si dodatnih 15 sekundi';
                                                                      setTimeout(function(){
                                                                      addtimer.innerHTML = '';
                                                                      },1000)
                                                              
                                                                        match++;
                                                                        if(match == 32){
                                                                          alert('Igra zavrsena')
                                                                          newStart()
                                                                          
                                                                        }
    
                                                             }else{
                                                           	 
                                                                      numCliks=0;
                                                                       
                                                                      setTimeout(function(){
                                                                      clickTwo[0].style.transform ='perspective(900px) rotateY(360deg)';
                                                                      clickTwo[1].style.transform ='perspective(900px) rotateY(360deg)';
                                                                      clickTwo=[];
                                                                      document.body.style.pointerEvents = 'auto';
                                                                       },1000)
                                                                      document.body.style.pointerEvents = 'none';              	 
                                                            }

                                             }

                                       });
                                      
                    	    }
                    }

                    gameduration = 360;
                    counter = 0;
                    setInterval(gameTime,1000);

                    function gameTime(){

                            gameduration -= 1 
                            counter += 1; 
                            var timer = document.getElementById('timer');
                            timer.innerHTML = 'Time left over ' + gameduration + ' seconds';
                                  if(counter ==360){
                                      
                                    newStart()      
                                  }
                                  if(gameduration == 0){
                                    alert("Igra zavrsena")
                                  }

                           var addtimer = document.getElementById('addtimer');

                    }

                     gameTime();


                   function newStart(){
                            var question = prompt("Do you want new game Yes/No")
                                      if(question == 'Yes'){
                                      newGame() 
                                      }else{};          
                   }
                             
}
newGame()






