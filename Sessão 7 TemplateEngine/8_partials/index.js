const express = require ('express');
const exphbs = require ('express-handlebars');

const app = express();
const port = 3000;

app.use(express.static('public'));

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
})

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');

app.get("/post", (req,res)=>{
    const post = {
        title: "Aprender NodeJs",
        category: "Javascript",
        body: "Este artigo vai te ajudar a aprender Node.Js....",
        comments: 4,    
    }
    res.render('blogspot', { post })
})

app.get('/blog', (req,res)=>{
    const posts = [
        {
            title:'Aprender NodeJs',
            category:'JavaScript',
            body:'Teste',
            comments: 4
        },
        {
            title:'Aprender php',
            category:'php',
            body:'Teste',
            comments: 4
        },
        {
            title:'Aprender Python',
            category:'python',
            body:'Teste',
            comments: 4
        },
        {
            title:'Aprender JAVA',
            category:'java',
            body:'Teste',
            comments: 4
        }
    ]
    res.render('blog', {posts})
})

app.get('/dashboard', (req,res)=>{

    const list = ["Item 1", "Item 2", "Item 3"]

    res.render('dashboard', {list})
})

app.get('/', (req,res)=>{
    
const user = {
    name: 'João Vitor',
    surname: "Monteiro",
    age: "21",  
    course: "ADS"

}

const palavra = 'teste';


const auth = true;

    res.render('home', {user: user, palavra, auth})
})

app.listen(port, ()=>{
    console.log(`Serviço executando na porta: ${port}`);
})