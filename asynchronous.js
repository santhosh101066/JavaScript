const content=document.querySelector('textarea')
const noasyncbtn=document.querySelector('button')
const asyncbtn=document.querySelector('button+button')
content.textContent="Try to edit while running"
const runningstatus=document.createElement('span')
document.body.insertBefore(runningstatus,document.querySelector('br'))

 

function without(a){
   
    console.log('started');
    for (let index = 0; index < a; index++) {  
       
    }
    runningstatus.textContent='finished'
}
async function withasync(a){
    runningstatus.textContent='running'
    const data= await fetch('http://localhost:3000/')
    console.log(data);
    runningstatus.textContent='finished'
}

noasyncbtn.addEventListener('click',()=>{
    runningstatus.textContent='running'
    without(Number(document.querySelector('input').value))
})
asyncbtn.addEventListener('click',()=>{
    withasync(Number(document.querySelector('input').value))
    console.log('event end');
})
