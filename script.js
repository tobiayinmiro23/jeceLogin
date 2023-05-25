let input=document.querySelectorAll('input')[0]
let password=document.querySelectorAll('input')[1]
let button=document.querySelectorAll('button')[0]

button.addEventListener('click',(e)=>{
    if(input.value == process.env.USERNAME && password.value == process.env.PASSWORD){
      console.log('welcome')
  } else{
      e.preventDefault()
  }
})
