import needle from "needle"; 

needle.get("http://localhost:3000/add-book", (err, res) => {
    console.log(res.body); 
});

needle.post(
    "http://localhost:3000/add-book", 
    { 
        Bookname: "I hate me", 
        ISBN: "123-123-213-23", 
        Author: "ME", 
        YearPublished: "2005" 
    },
    (err, res) => {
        console.log(res.body)
    }
);

needle.get("http://localhost:3000/find-by-isbn-author?ISBN=978-0-7475-3269-9&Author=J.K+Rowling", (req,res) => {
    console.log(res.body); 
})

needle.get("http://localhost:3000/find-by-author?Author=J.K+Rowling", (req,res) => {
  
    console.log(res.body); 
})