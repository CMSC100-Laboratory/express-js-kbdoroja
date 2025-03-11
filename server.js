import express from "express"; 
import { appendFileSync } from 'node:fs';
import { readFileSync } from 'node:fs'; 

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

var matchesarray = [];  //array for similar author matches

var book = []   //array to put book details

app.get("/add-book", (req,res) =>{
    res.send("Processing Book Additions")
})

app.post("/add-book", (req, res) => {
   book.push(req.body.Bookname);            //adds the details in post to book array
   book.push(req.body.ISBN); 
   book.push(req.body.Author);
   book.push(req.body.YearPublished); 

    if(book.length == 4){
        if(book[0] && book[1] != 0 && book[2] != 0 && book[3] != 0){    //checks if they are non-empty strings
            appendFileSync("books.txt", book[0]+","+ book[1]+","+ book[2]+","+ book[3] + "\n", "utf-8");    //appends to book.txt
            book.length = 0;            //resets book array length
            res.send("success : true");     //sends success message
        }else{res.send("success: false")}
    }else{res.send("success: false")}
   
})

app.get("/find-by-isbn-author", (req,res) => {
    var text = readFileSync("books.txt", "utf-8");  //uses readFileSync to read books.txt
    var textarray = text.split("\n");               //splits each line into an item in an array
    for(let x = 0; x < textarray.length; x++){      //checks every array item if it includes query isbn and query author
        if(textarray[x].includes(req.query.ISBN) && textarray[x].includes(req.query.Author)){
            res.send(textarray[x]);     //as ISBN is unique, sends only one book information
        }
    }
    res.send("No matches");         //else send no match

})

app.get("/find-by-author", (req,res) => {
    matchesarray.length = 0;                        //resets matches array length
    var text = readFileSync("books.txt", "utf-8");  
    var textarray = text.split("\n"); 
    for(let x = 0; x < textarray.length; x++){
        if(textarray[x].includes(req.query.Author)){
            matchesarray.push(textarray[x]);        //pushes each item in the textarray into the matchesarray for multiple author matches
        }
    }
    
    res.send(matchesarray);     //sends the array whether empty or not
    
    
})

app.listen(3000, () => {console.log("Server started at port 3000")}); 