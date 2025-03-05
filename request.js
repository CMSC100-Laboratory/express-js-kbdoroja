import needle from "needle"; 

needle.get("http://localhost:3000/add-book", (err, res) => {
    console.log(res.body); 
});

needle.post(
    "http:localhost:3000/add-book", 
    { Bookname: "HarryPotter Philostone",
    ISBN: "978-0-7475-3269-9", 
    Author: "JK Rowling", 
    YearPublished: 1997
    },
    (err, res) => {
        console.log(res.body)
    }
);