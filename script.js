let input=document.querySelectorAll('input')[0]
let password=document.querySelectorAll('input')[1]
let button=document.querySelectorAll('button')[0]

const handleButton=(e)=>{
    if(input.value !== 'ayinmiro' && password.value !== 'tobi')  e.preventDefault()

}
button.addEventListener('click',(e)=>{
    if(input.value !== 'ayinmiro' && password.value !== 'tobi')  e.preventDefault()
})