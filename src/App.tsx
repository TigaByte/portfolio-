import './App.css'
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import ProfilePage from "./sides/ProfilePage.tsx";
import '@fontsource/inter/400.css';  // Regular weight
import '@fontsource/inter/600.css';
import BlogMainPage from "./sides/blog/BlogMainPage.tsx";
import TryingToMakeSenseOutOfLlmArchitecture
    from "./sides/blog/articles/trying-to-make-sense-out-of-llm-architecture.tsx";  // Bold weight (if needed)



function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ProfilePage />} />
            <Route path="/blog" element={<BlogMainPage />} />
            <Route path="/blog/trying-to-make-sense-out-of-llm-architecture" element={<TryingToMakeSenseOutOfLlmArchitecture />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
