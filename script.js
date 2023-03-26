const joke = document.querySelector('#joke')

const jokeBtn = document.querySelector('#joke-btn')

function getJoke(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    
    xhr.onreadystatechange = 
    function (){
    if(this.readyState === 4 && this.status === 200){
        const data = JSON.parse(this.responseText)
        const jokeText =data.value
        console.log(jokeText) 
        joke.textContent=jokeText
    } else {
        joke.textContent='Something went wrong(Not funny)'
    }}


    xhr.send()


}


getJoke()
jokeBtn.addEventListener('click',getJoke)