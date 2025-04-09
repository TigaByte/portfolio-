import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ProfilePage from "./sides/ProfilePage.tsx";
import '@fontsource/inter/400.css';  // Regular weight
import '@fontsource/inter/600.css';  // Bold weight (if needed)



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProfilePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
