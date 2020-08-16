const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")
const { get } = require('http')

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express :server,
    autoescape:false,
    noCache: true 
})

server.get("/about", function(req,res){
    const about= {
        title1: "Sobre o Foodfy" ,
        title2: "Como tudo começou…",
        title3: "Nossas receitas",
        par1:"Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        par2:"Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod."
    }
    return res.render("about", { about })
})

server.get("/recipe", function(req,res){
    return res.render("recipe", { items: recipes })
})

server.get("/preparationMode?:index", function (req, res) {
    const recipeIndex = req.params.index 
    console.log(recipeIndex);
    console.log('chegou na preparationMode')
    console.log(recipes[recipeIndex]);

    return res.render("preparationMode", { item: recipes[recipeIndex] })
})


server.get("/", function(req,res){
    const home = {
        title:"As melhores receitas",
        description:"Aprenda a construir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        img:"chef",
        popularRecipe:"Mais acessadas",
        item: recipes
    } 
    return res.render("home", { home })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
});

server.listen(5005, function(){
    console.log('Server is running');
})