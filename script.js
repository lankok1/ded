const btn = document.getElementById('btn')
const container = document.getElementById('container')
const audio = new Audio('/1000-7.mp3')
btn.addEventListener('click',() => {
    let start = 1000
    audio.play()
    let interval = setInterval(() => {
        if (start >= 0){
            container.insertAdjacentHTML('beforeend', `<p>${start -= 7}</p>`)
            window.scroll(0, document.body.scrollHeight)
        }  else{
            audio.pause()
            clearInterval(interval)
        }
    },100)
})

/* btn.onclick = () => {
    console.log('я крутой')
} */

/*     function click1 () {
        console.log('я крутой')
    } */