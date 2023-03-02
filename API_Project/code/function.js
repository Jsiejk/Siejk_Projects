const colorswitch = document.getElementById('colorswitch');
const options = document.getElementById('options');
const content = document.getElementById('content');
let jokeformat = document.getElementById('joke1');
let jokeContainer = document.getElementById("joke1");
const btn = document.getElementById("btn");

console.log(document.querySelector('input[name="jokeNumber"]'));
// const form = document.getElementById("form");
// const formData = new FormData(form);
// console.log(formData);
// console.log(numofJokes);

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

        let numofJokes = document.querySelector('input[name="jokeNumber"]:checked')?.value;
        console.log(numofJokes);

        // if they asked for more jokes than there are, don't do anything
        if (filtered?.length < numofJokes) {
            console.error('Not enough jokes!')
            jokeContainer.textContent = "Not enough jokes. Please try again!"
        }
        else {
            for (let i = 0; i < numofJokes; i++) {
                jokeContainer = document.getElementById(`joke${i + 1}`);
                console.log(jokeContainer);
                const item = getRandom(filtered);
                console.log(item);
                jokeContainer.textContent = `${item.value}`;
                // filtered.remove(item);
            }
        }


    }
}



btn.addEventListener("click", getJoke);