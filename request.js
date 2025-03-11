import needle from "needle"; 

needle.get("http://localhost:3000/add-book", (err, res) => {
    console.log(res.body); 
});

needle.post(
    "http://localhost:3000/add-book", 
    { 
        Bookname: "I hate me", 
        ISBN: "978-0-7475-3269-9", 
        Author: "ME", 
        YearPublished: "2005" 
    },
    (err, res) => {
        console.log(res.body)
    }
);

needle.get("http://localhost:3000/find-by-isbn-author?ISBN=23231&Author=ME", (req,res) => {
    console.log(res.body); 
})

needle.get("http://localhost:3000/find-by-author?Author=ME", (req,res) => {
    console.log(res.body); 
})