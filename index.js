const port = 9000;

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("use /api/icecream and /api/eu");
});

app.get('/api/icecream', (req, res) => {
    const icecream = ["vanilla", "chocolate", "cookies and cream", "strawberry", "banana", "mint chocolate chip", "caramel cream", "neopolitan", "coffee", "fudge"];

    res.send(JSON.stringify(icecream));
});

app.get('/api/eu', (req, res) => {
    const icecream = ["North Macedonia is the birthplace of the Cyrillic alphabet", "Mother Teresa was ethnically Albanian and remains the only person from this country to have won the Nobel Prize.", 
    "The world’s largest wine cellar is buried in Moldova.", "Much of chocolate as we know it today was created in Switzerland, including milk chocolate, chocolate with hazelnuts and melting chocolate.", 
    "The Rubik’s Cube was invented in Hungary by an architect who named it after himself.", "Once considered some of the shortest people in the world, the Dutch are now the tallest. Men average just over 6 feet while women average 5 feet 6 inches.", 
    "The man who invented the steam espresso machine and the Illycaffe brand, Francesco Illy, was born in Romania in 1892.", 
    "France is the most visited country in the world with 89 million annual tourists.", "Everyone who lives in Germany, even foreigners, can attend college tuition-free.", 
    "One of Malta’s islands, Gozo, has a cave that is apparently featured in Homer’s “Odyssey.”", "The first time a conifer was decorated for Christmas in the style we know today was in 1510 in Riga, Latvia."];

    res.send(JSON.stringify(icecream));
});

app.listen(port, () =>{
    console.log ("Listening on port", port);
});