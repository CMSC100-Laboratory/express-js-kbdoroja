import express from "express"; 
import { appendFileSync } from 'node:fs';
import { readFileSync } from 'node:fs'; 

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

var matchesarray = []; 

var book = []

app.get("/add-book", (req,res) =>{
    res.send("I have received your prodding")
})

app.post("/add-book", (req, res) => {
   book.push(req.body.Bookname);
   book.push(req.body.ISBN); 
   book.push(req.body.Author);
   book.push(req.body.YearPublished); 

    if(book.length == 4){
        if(book[0] && book[1] != 0 && book[2] != 0 && book[3] != 0){
            appendFileSync("books.txt", book[0]+","+ book[1]+","+ book[2]+","+ book[3] + "\n", "utf-8");
            res.send("success : true"); 
            bookarray.push(book); 
            book.length = 0; 
        }else{res.send("success: false")}
    }else{res.send("success: false")}
   
})

app.get("/find-by-isbn-author", (req,res) => {
    var text = readFileSync("books.txt", "utf-8"); 
    var textarray = text.split("\n"); 
    for(let x = 0; x < textarray.length; x++){
        if(textarray[x].includes(req.query.ISBN) && textarray[x].includes(req.query.Author)){
            res.send(textarray[x]); 
        }
    }
    res.send("no matches"); 

})

app.get("/find-by-author", (req,res) => {
    var text = readFileSync("books.txt", "utf-8"); 
    var textarray = text.split("\n"); 
    for(let x = 0; x < textarray.length; x++){
        if(textarray[x].includes(req.query.Author)){
            res.send(textarray[x]); 
        }
    }
    res.send("no matches"); 
    
})

app.listen(3000, () => {console.log("Server started at port 3000")}); 