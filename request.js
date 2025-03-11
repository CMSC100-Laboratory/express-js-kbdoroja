import needle from "needle"; 

needle.get("http://localhost:3000/add-book", (err, res) => {
    console.log(res.body); 
});

needle.post(
    "http://localhost:3000/add-book",       //sends this object to be put into books.txt thru post
    { 
        Bookname: "This Is How You Lose the Time War", 
        ISBN: "9781534431003", 
        Author: "Amal El-Mohtar and Max Gladstone", 
        YearPublished: "2020" 
    },
    (err, res) => {
        console.log(res.body)
    }
);

needle.get("http://localhost:3000/find-by-isbn-author?ISBN=978-0-7475-3269-9&Author=J.K+Rowling", (req,res) => {
    console.log("Result for ISBN with Author Search:"); 
    console.log(res.body); 
})

needle.get("http://localhost:3000/find-by-author?Author=Me", (req,res) => {
    console.log("Result for Author Search:"); 
    if(res.body.length == 0){                       //if matchesarray sent is empty, print no matches for the author
        console.log("No matches for that author");  
    }else{
        for(let x = 0; x < res.body.length; x++){   //else prints them one by one
            console.log(res.body[x]); 
        }
    }
})