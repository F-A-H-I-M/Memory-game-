let as=0
let a=0
let b=0
let array
let img =[1,"img1.jpg","img2.jpg","img3.jpg","img4.jpg",
"img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg","img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg","img11.jpg","img12.jpg","img13.jpg","img14.jpg","img15.jpg"
]
let i=1
let index
let id1
let id2
let st=0
let nd=0
let no
let time2=1
let winno=0
start=()=>{

document.getElementById("number").innerHTML="0:0";
document.getElementById("winner").innerHTML="";


if(time2==1){
time2=0 

index=new Set()
 array=[]
index.add(0)
while(index.size<31){

let randint=Math.floor(Math.random()*30)+1  
index.add(randint)   
}

index.forEach(function(value){
array.push(value) 
}) 

i=1
while(i<31){
let id="img"+i    
document.getElementById(id).addEventListener("click",touch)
i++    
} 
 
 
                                                                             
 i = 1

while(i<(array.length)){
let id="img"+i
let num=array[i] 
document.getElementById(id).src=img[num]
i++  
} 



if(as==0){
setTimeout(function(){

index=new Set()
array=[]
index.add(0)

while(index.size<31){

let randint=Math.floor(Math.random()*30)+1  
index.add(randint)   
}

index.forEach(function(value){
array.push(value) 
}) 

i=1
while(i<30){
let id="img"+i  
  
document.getElementById(id).addEventListener("click",touch)
i++    
}

i=1
while(i<array.length){
let id="img"+i
let num=array[i]  
document.getElementById(id).src=img[num]
i++    
}




setTimeout(function(){
i=1
while(i<array.length){
let id="img"+i  
document.getElementById(id).src="template.jpg"
i++  
document.getElementById("winner").innerHTML=`1st player's turn`
 
}},5000)                                                                            


time2=1    
},10000)
as=1
}

else{
setTimeout(function(){
i=1
while(i<array.length){
let id="img"+i  
document.getElementById(id).src="template.jpg"
i++   
}
time2=1
},2000)         
}


}

}



let get=()=>{
if(id1.length==5){
 no=id1[3]+id1[4]   
}
else{
 no=id1[3]         
}               
}


let get2=()=>{
if(id2.length==5){
 no=id2[3]+id2[4]   
}
else{
 no=id2[3]         
}               
}




let win=()=>{
winno+=2
//console.log(winno)
if(winno==30){
  if(st>nd){
   document.getElementById("winner").innerHTML="player1 win"
  }
  else if(st<nd){ document.getElementById("winner").innerHTML="player2 win"
  }
  else{
   document.getElementById("winner").innerHTML="match draw"
  }
}    
    
}


let set1
let set2

set=()=>{
if(winno<30){
if(b==0){

document.getElementById("winner").innerHTML=`1st player's turn`

} 

else if(b==1){
document.getElementById("winner").innerHTML=`2nd player's turn`


} 

}

       
}





let b0=()=>{
  
 
if(a==0){
id1=event.target.id        

get()


 
document.getElementById(id1).src=img[array[no]]

document.getElementById(id1).removeEventListener("click",touch) 
a=1
time=1
}

else if(a==1){
id2=event.target.id        


get2()


 

document.getElementById(id2).src=img[array[no]]

document.getElementById(id2).removeEventListener("click",touch) 

let src1 = document.getElementById(id1).src

let src2 = document.getElementById(id2).src



setTimeout(function(){

if(src1==src2){
st+=1
document.getElementById("number").innerHTML=st+":"+nd
    

win()
}
else{

document.getElementById(id1).src="template.jpg"
document.getElementById(id2).src="template.jpg"
document.getElementById(id1).addEventListener("click",touch)   
document.getElementById(id2).addEventListener("click",touch)       
}
time=1
b=1
a=0
set()
},1500)
    

}
   
    
}





let b1=()=>{
    

if(a==0){
id1=event.target.id        

get()


document.getElementById(id1).src=img[array[no]]

document.getElementById(id1).removeEventListener("click",touch) 
a=1
time=1
}

else if(a==1){
id2=event.target.id        


get2()




document.getElementById(id2).src=img[array[no]]

document.getElementById(id2).removeEventListener("click",touch) 

let src1 = document.getElementById(id1).src

let src2 = document.getElementById(id2).src


setTimeout(function(){

if(src1==src2){
nd+=1  
document.getElementById("number").innerHTML=st+":"+nd
  
win() 
}
else{

document.getElementById(id1).src="template.jpg"
document.getElementById(id2).src="template.jpg"
document.getElementById(id1).addEventListener("click",touch)   
document.getElementById(id2).addEventListener("click",touch)       
}
time=1
b=0
a=0
set()
},1500)    
}    
    
}










let time=1


let touch=()=>{  


if(time==1){

time=0

if(b==0){
b0()
}

if(b==1){
b1()

}





}    
}











