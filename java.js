let turn ='x';
let squar =[];
let Title = document.querySelector('.title')



//let item = document.getElementById('item1')


function Game(id){
     
let elment = document.getElementById(id);

if( turn === 'x'&&    this != '' )

{

elment.innerHTML='x';



turn ='o';
Title.innerHTML ='o';

}

else if(turn ==='o'&& elment.innerHTML =='')

{

elment.innerHTML='o';
turn ='x';
Title.innerHTML ='x';
}


Winner()}

//check who turn now 




function end(n1,n2,n3)
{
   
Title.innerHTML =squar[n1]+ ' '+ 'winner';



setInterval(function() {
    Title.innerHTML +='.'
},  1000);

setInterval(function() {
   window.location.reload()
},  2000);

}
//get the wenner 



function Winner ()
{
for(let i=1 ; i<10 ; i++)

{

squar[i]= document.getElementById('item'+i).innerHTML ; 
// her we put innerHtml for get the value of the element 

//console.log(i)
 

  }
  
if(squar[1] == squar[2] && squar[2]==squar[3] && squar[1]!=''){
     
  end(  1,2,3    ) }

if(squar[4] == squar[5] && squar[4]==squar[6] && squar[6]!=''){
  
  end(   4,5,6   ) }

if(squar[7] == squar[8] && squar[8]==squar[9] && squar[9]!=''){
    
  end( 7,8,9     ) }


if(squar[1] == squar[5] && squar[5]==squar[9] && squar[1]!=''){
     
  end(  1,5,   9 ) }


if(squar[5] == squar[7] && squar[5]==squar[9] && squar[9]!=''){
  
  end(  7,3,5    ) }


}
     //deceide who's the winner  

