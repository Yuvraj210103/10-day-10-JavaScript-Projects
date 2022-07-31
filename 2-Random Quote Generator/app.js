
const getNewQuote = async () =>
{
    var url ="https://type.fit/api/quotes";

    //fetch the data from api
    const response = await fetch(url);
    
    //convert response to JSON and store it in quotes array

    const allQuotes = await response.json();

    //Generate a random number between 0 to lenght of quotes array

    const indx = Math.floor(Math.random() * allQuotes.length);
    const quote = allQuotes[indx].text;
    const author = allQuotes[indx].author;
        if(author==null)
        {
            author ="Anonymous";
        }

        document.getElementById('quote-here').innerHTML =`
   <p class="quote" id="q">${quote}</p>
        <p class="source" id="s">~${author}</p>
        <div class="btn">
        <button id="loadQuote" onclick="getNewQuote()">Next</button>
        </div>`

}

getNewQuote();
    
 /*  document.getElementById('quote-here').innerHTML =`
   <p class="quote" id="q">${quote.quote}</p>
        <p class="source" id="s">~${quote.source}</p>
    
        <button id="loadQuote" onclick="genNew()">Generate new Quote</button>`
        */
