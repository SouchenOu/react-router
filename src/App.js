import {Link, Routes, Route} from "react-router-dom"
import { Home} from "./pages/Home"
import {BookList} from "./pages/BookList"


function App() {
  return (
  <>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/newBook">newBook</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
    </ul>
    </nav>
  <Routes>
    <Route path="/" element={ <Home/> } />

    <Route path="/books" element= {<BookList/>}/> 

  </Routes>
  </>
  )
}

export default App;

// we will going to use a compenent calling the routes this routes comes from (react-router-dom) and inside of this routes compenent we need to use another compenent calling
//the route to define the routes compenent  
// route here define the path to different page website
//<Route path="/" element={ <Home/> } /> (here in index path we will going to home compenent)
// so how we can use react router
//1: you need first to import your router into your index.js page
//2:you need to define all your routes inside of this routes component
//3:and you need to use different link tags to move around your application to all of these diferent routes\


/******there is different type of browser you can use the browser router is not only the router that is available there is another router called Hashrouter */

// Hashrouter is very similar to the browser-router in that it works inside your browser but instead of storing the url as a normal url it stores inside a hashtag portion of our url
//and there is also (unstable_historyRouter) and the way this history router works is allows you to actually take control completely of the history element in react router so the history element just determines how your entire browser renders out the history of all the pages you have been on so 