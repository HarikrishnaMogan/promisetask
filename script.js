
/*
const europe = fetch("https://restcountries.eu/rest/v2/region/europe")
.then(data=> data.json());


const asia = fetch("https://restcountries.eu/rest/v2/region/asia")
.then(data=> data.json());

Promise.all([europe,asia]).then(countries=>
    {
        let comarr=countries[0].concat(countries[1]);
        console.log(comarr);
    });
    */


/* Task2*/
/*
const spanish = fetch("https://restcountries.eu/rest/v2/lang/es")
.then(data=> data.json())
.then(con=> con.filter(c=> c.region=="Europe"))
.then(countries=>console.log(countries));
*/



