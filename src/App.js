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
//3:and you need to use different link tags to move around your application to all of these diferent routes