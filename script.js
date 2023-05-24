let input=document.querySelectorAll('input')[0]
let password=document.querySelectorAll('input')[1]
let button=document.querySelectorAll('button')[0]

const handleButton=()=>{
    if(input.value === 'ayinmiro' && password.value === 'tobi'){
       window.location='https://jece-project.vercel.app/'
        return true

    } else{
        return false
    }
}
