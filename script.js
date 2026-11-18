
const joke = document.getElementById("joke");
const punchline = document.getElementById("punchline");1
const btn = document.getElementById("btn");

async function generateJoke() {

    joke.innerText = "Loading...";
    punchline.innerText = "";

    try {

        const response = await fetch(
            "https://v2.jokeapi.dev/joke/Any"
        );

        const data = await response.json();

        if (data.type === "single") {

            joke.innerText = data.joke;

        } else {

            joke.innerText = data.setup;
            punchline.innerText = data.delivery;

        }

    } catch (error) {

        joke.innerText = "Unable to load joke!";
        punchline.innerText = "Please try again.";

        console.log(error);

    }
}

generateJoke();


btn.addEventListener("click", generateJoke);
