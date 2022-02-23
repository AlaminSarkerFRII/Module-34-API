

const loadData = () => {
    fetch('https://api.kanye.rest/')
    .then(response => response.json())
    .then(data => displayQoute(data))
}



const displayQoute = quote =>{

    const quoteText = document.getElementById('quote');
    quoteText.innerText = quote.quote;

}

