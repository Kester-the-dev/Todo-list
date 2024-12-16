const inPut = document.getElementById('put')
const msg = document.getElementById('msg')
const display = document.getElementById('here')

function addTask() {
    if(inPut.value === ''){
        msg.innerHTML = 'please input task'
        setTimeout(() => msg.innerHTML = '', 2000)
    }else{
        const li = document.createElement('li')
        li.innerHTML = inPut.value
        display.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '&#10060;'
        li.appendChild(span)
    }
    inPut.value = ''
}
display.addEventListener('click', function(e){
   e.target.parentElement.remove()
},)


