
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useState} from 'react';
const Book = (props) => {
const [read, setRead] = useState(false);	
	
return(<div>
	


	<Card style={{ width: '18rem', border: '1px solid gray', marginLeft: '580px', backgroundColor: 'lightgray'}}>
  <Card.Body>
    <Card.Title>{props.book.title}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{props.book.author}</Card.Subtitle>
    {read?<div>finished</div>:<div> still working on </div>}
    <button type="button" onClick={() => setRead(!read)}>still reading?</button>
   <button type="button" onClick={() => props.onDelete(props.book.id)}>delete book</button>
  </Card.Body>
</Card>

<br/><br/>

	</div>);
}

export default Book;