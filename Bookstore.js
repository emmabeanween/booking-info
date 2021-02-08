
import React, {useState} from 'react';
import BookList from './BookList';
import searchForm from './searchForm';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Bookstore = () => {

const [booklist, setList] = useState([{"title": "Oliver Twist", "author": "Charles Dickens", "id":Math.random().toString(36).substring(7) }, 
	{"title": "Fahrenheit 451", "author": "Ray Bradbury", "id": Math.random().toString(36).substring(7)}]);
const [addForm, setForm] = useState(false);

function addBook(event){
// add button with addBook {addForm?<addForm onSubmit={addBook}}
event.preventDefault();
const title = event.target.title.value;
const author = event.target.author.value;
const id = Math.random().toString(36).substring(7);
const newBook = {"title": title, "author": author, "id": id};
const newbookList = booklist.slice().concat(newBook);
setList(newbookList);

}

function removeBook(id){

const newbookList = booklist.filter((book)=> book.id!=id);
 
setList(newbookList);

}



return(<div>



<Button onClick={() => setForm(!addForm)} variant="outline-dark">+</Button><br/>
<br/><br/>


{addForm?<div>

	

<Form onSubmit={addBook} style={{width: '200px', marginLeft: '610px', border: '1px dashed gray', padding: '10px', position: "relative"}}>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="title name" name="title" />
  </Form.Group>
  <Form.Group>
    <Form.Control type="text" placeholder="author name" name="author" />
  </Form.Group>


  <Button variant="secondary" type="submit">
    add book!
  </Button>
</Form><br/>






	</div>:<div></div>}
<BookList list={booklist} onDelete={removeBook}/>

	</div>);

}

export default Bookstore;