const express = require ('express');
const hbs = require('hbs');
const app = express();


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');

app.get('/', (request,response, hbs) => {
    //response.send('<h1>Hello From Express</h1>');
    response.render('welcome.hbs',{
            title: "welcome to my site!",
            text: "olaolaolaolol"
        });
});
app.get('/about', (request,response) => {
  /*  response.send({
        name: 'nuno',
        likes: ['teaching','reading','Number of people that touch my spaghette']
    }
);*/
response.render('welcome.hbs',{
    title: "welcome to my world!",
    text: "dwdewfwfef"
});
});

app.get('/corachao', (request, response)=>{
   var date = new Date().toString();

    response.render('corachao.hbs',{
        text: date
    });
    
});


app.listen(3000);



