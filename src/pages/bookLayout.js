import {Link} from "react-router-dom"
import {Outlet} from "react-router-dom"

export function BookLayout()
{
    return (
    <>
        <Link to="/books/1">Book 1</Link>
        <br/>
        <Link to="/books/2">Book 2</Link>
        <br/>
        <Link to="/books/3">Book 3</Link>
        <br/>
        <Link to="/books/4">Book 4</Link>
        <br/>
        <Link to="/books/new">new_book</Link>
        <Outlet />
    </>
    )
}
//An <Outlet> should be used in parent route elements to render their child route elements.
//The Outlet component alone allows nested routes to render their element content out and anything else the layout route is rendering