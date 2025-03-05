import express from "express"; 
import { appendFileSync } from 'node:fs';

const app = express(); 
app.use(express.json()); 
app.use(express.urlencoded({extended: false})); 

let booklist = [{Bookname: "", ISBN: "", Author: "", YearPublished: ""}]
var bR = {
    Bookname: "HarryPotter PHilostone", 
    ISBN: "978-0-7475-3269-9", 
    Author: "JK Rowling", 
    YearPublished: 1997}; 

app.post("/add-book", (req, res) => {
    // if(Object.hasOwn(bR, Bookname) && Object.hasOwn(bR, ISBN) && Object.hasOwn(bR, Author) && Object.hasOwn(bR, YearPublished)){
    //     console.log("Hello");
    //     appendFileSync("books.txt", bR.Bookname+","+bR.ISBN+","+bR.Author+","+bR.YearPublished);
    //     res.send("saved!");
    // }else{
    res.send("Hello" + bR.Bookname);
})

app.get("/find-by-isbn-author", (req,res) => {


})

app.get("/find-by-author", (req,res) => {

    
})

app.listen(3000, () => {console.log("Server started at port 3000")}); 