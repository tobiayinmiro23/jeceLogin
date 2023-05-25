
let button=document.querySelectorAll('button')[0]

button.addEventListener('click',(e)=>{
 let username=document.getElementById('username').value
let password=document.getElementById('password').value
console.log(password)

if(username == process.env.USERNAME && password == process.env.PASSWORD){
    console.log('welcome')
} else{
      e.preventDefault()
  }

})
