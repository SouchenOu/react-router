import {Link} from "react-router-dom"

export function BookList ()
{
    return (
    <>
    <h1>BookList</h1>
    
    <Link to="/books/1">Book 1</Link>

    <Link to="/books/2">Book 2</Link>

    <Link to="/books/3">Book 3</Link>
    </>
    )
}