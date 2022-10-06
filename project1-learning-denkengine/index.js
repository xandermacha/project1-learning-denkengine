console.log('online');

let quotesDiv = document.getElementById('quotes')
fetch('https://api.kanye.rest')
.then(res => res.json())
.then(quote => {
    quotesDiv.innerHTML += `<p class='quotes'> "${quote.quote}" -ye </p>`
})

