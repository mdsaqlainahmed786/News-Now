import './App.css';
import "./Components/NavBar/Nav.css";
import NavBar from "./Components/NavBar/NavBar"
import NewsComp from "./Components/NewsItems/NewsComponent"
import "./Components/NewsItems/Newsdisplay.css"
import { Route, Routes} from "react-router-dom"
function App() {
  return (
  <div className="App">
      <NavBar/>
           <Routes>
   <Route path='/' element={<NewsComp key='general' pageSize={10} country='in' category='general' />}></Route>
   <Route path='/general' element={<NewsComp key='general' pageSize={10} country='in' category='general' />}></Route>
   <Route path='/health' element={<NewsComp key='health' pageSize={10} country='in' category='health' />}></Route>
   <Route path='/business' element={<NewsComp key='business' pageSize={10} country='in' category='business' />}></Route>
   <Route path='/science' element={<NewsComp key='science' pageSize={10} country='in' category='science' />}></Route>
   <Route path='/sports' element={<NewsComp key='sports' pageSize={10} country='in' category='sports' />}></Route>
   <Route path='/technology' element={<NewsComp key='technology' pageSize={10} country='in' category='technology' />}>
             </Route>
        </Routes>
    </div>
  );
}
export default App;