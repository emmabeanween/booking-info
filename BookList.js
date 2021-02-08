import Book from './Book';

const BookList= (props) => {
	
return(<div>

{props.list.map(function(book, index){
         return (<Book book={book} onDelete={props.onDelete}/>);
       })}

	</div>);


}

export default BookList;