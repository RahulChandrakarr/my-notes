import ImportantNotes from "./componants/ImportantNotes";
import ToDoList from "./componants/ToDoList";
import Home from "./componants/Home";
import NavBar from "./componants/NavBar";
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
function App() {

  return (
    <>
      <BrowserRouter>


        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ToDoList' element={<ToDoList />} />
          <Route path='/ImportantNotes' element={<ImportantNotes />} />
          {/* <Route path='/*' element={<Page404/>} />  */}
          {/* <Route path='/*' element={<Navigate to="/" />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

// git add .
// git commit -m "Push all files again"
// git push -f origin main
