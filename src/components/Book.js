import React,{useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function Book() {
    const paperStyle={padding:'50px 20px',  width:600, margin:"20px"};
    const[name,setName]=useState('');
    const[author,setAuthor]=useState('');
    const[genre,setGenre]=useState('');
    const[publicationDate,setPublicationDate]=useState('')
    const[books,setBooks]=useState([])

    const handleClick=(e)=>{
        e.preventDefault()
        const book={name,author,genre,publicationDate}
        console.log(book)
        fetch("http://localhost:8080/api/v1/mediaCenter/addnewbook",
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(book)
        }).then(()=>{
            console.log("New book added")
        })
    }

    const handleDelete=(id)=>{
      console.log("deleting book")
      fetch(`http://localhost:8080/api/v1/mediaCenter/deletebook?id=${id}`,
      {
        method:"DELETE",
        headers:{"Content-Type":"application/json"},
      }).then(()=>{
        console.log("book deleted")
      })


    }

    useEffect(()=>{
    fetch("http://localhost:8080/api/v1/mediaCenter/getbooks")
    .then(res=>res.json())
    .then((result)=>{
        setBooks(result);
    }
    )},[])

  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
        <h1 style={{color:"navy"}}>Add Book to Log</h1>
      <TextField id="outlined-basic" label="book name" variant="outlined" fullWidth 
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <TextField id="outlined-basic" label="genre" variant="outlined" fullWidth
      value={genre}
      onChange={(e)=>setGenre(e.target.value)}/>
      <TextField id="outlined-basic" label="author" variant="outlined" fullWidth
      value={author}
      onChange={(e)=>setAuthor(e.target.value)}/>
      <TextField id="outlined-basic" label="publicationDate" variant="outlined" fullWidth
      value={publicationDate}
      onChange={(e)=>setPublicationDate(e.target.value)}
      />

    <Button variant="contained" onClick={handleClick}>Submit</Button>
    </Box>
    
    </Paper>

    <Paper elevation={3} style={paperStyle}>
      {books.map(book=>(
        <Paper elevation={6} style={{margin:"10px", padding:"15px", textAlign:"left"}} key={book.id}>
            Id:{book.id}<br/>
            name:{book.name}<br/>
            author:{book.author}<br/>
            publicationDate:{book.publicationDate}<br/>
            <Button variant='contained' onClick={handleDelete} style={{alignSelf:"right"}}>delete</Button>
            </Paper>
      ))}
    </Paper>
    </Container>
  );
}
