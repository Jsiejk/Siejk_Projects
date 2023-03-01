const colorswitch = document.getElementById('colorswitch');
const options = document.getElementById('options');
const content = document.getElementById('content');
const jokeformat = document.getElementById('joke','joke2','joke3','joke4');
const jokeContainer = document.getElementById("joke","joke2","joke3","joke4");
const btn = document.getElementById("btn");

colorswitch.addEventListener('change', e => {
    const isChecked = e.target.checked;
    
    if (isChecked) {
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

/**
 * @param {Array<T>|string} arr 
 * @return {T|string}
*/
const getRandom = (arr) => {
    if (arr.length) {
        const idx = Math.floor(Math.random() * arr.length);
        return arr[idx]
    } else {
        return null;
    }
};




const getJoke = async (e) => {
    const userSearch = document.getElementById("search-text").value;
    let url = 'https://api.chucknorris.io/jokes/search?query=Chuck';

    if (userSearch) {
        url = `https://api.chucknorris.io/jokes/search?query=${userSearch}`;
    }
    
    // Prevent the webpage from reloading on submit
    if (e) {
        e.preventDefault();
    }
    
    // jokeContainer.classList.remove("fade");
    
    // Calling the url to get the joke
    const response = await fetch(url);

    // Finding value of selected radio and changing layout accordingly
    if (document.getElementById('num1id').checked) {

        
        // if you get a 200-399
        if (response.ok) {
            const data = await response.json(); // object
            const dataArr = data?.result; // array
            const filtered = dataArr?.filter((v) => { // filtered for explicit
                // ternary
                // return v?.categories.indexOf('explicit') >= 0 ? false : true;
                
                // same thing
                // const cats = v?.categories;
                // if (cats.indexOf('explicit') >= 0) {
                    // return false;
                    // } else {
                        //  return true;
                        // }
                        
                        // with stringify
                        // return JSON.stringify(v).indexOf('explicit') < 0;
            
                        // with regex (best)
                        const reggie = /explicit|fuck|dick|mom/gi
                        const string = JSON.stringify(v);
                        const match = string.match(reggie);
                        return match == null ? true : false;
                    });
                    
                    // take out the explicit jokes
                    if (filtered && filtered.length) { /// TODO: check for the right number of jokes
                        const item = getRandom(filtered);
                        jokeContainer.textContent = `${item.value}`;
                    }
                    
                    
                    else {
                        console.error('Not enough jokes!')
                        jokeContainer.textContent = "Not enough jokes. Please try again!"
                    }
                } else {
                    jokeContainer.textContent = "Please try a new search. There is a 3 character minimum, and only real words will give a result."
    }
}
else if(document.getElementById('num2id').checked) {

    
}
}

btn.addEventListener("click", getJoke);