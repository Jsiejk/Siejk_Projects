const colorswitch = document.getElementById('colorswitch');
const options = document.getElementById('options');
const content = document.getElementById('content');
const jokeformat = document.getElementById('joke');

colorswitch.addEventListener('change',e => {
    const isChecked = e.target.checked;

    if(isChecked) {
        options.classList.add('swap');
        content.classList.add('swap');
        jokeformat.classList.add('swap');
    }
    else {
        options.classList.remove('swap');
        content.classList.remove('swap');
        jokeformat.classList.remove('swap');

    }
        
})




const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://api.chucknorris.io/jokes/random";

let getJoke = (e) => {
    if (e) {
        e.preventDefault();
    }
    
    jokeContainer.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        console.log(item);
        jokeContainer.textContent = `${item.value}`;
        jokeContainer.classList.add("fade");
    });
}

btn.addEventListener("click",getJoke);
getJoke();

