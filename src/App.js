import { Routes, Route } from "react-router-dom";
import { Projects } from "./pages/projects/Project";
import { Experiences } from "./pages/experience/Experience";
import { Blog } from "./pages/blog/Blog";
import { Header } from "./components/header/Header";
import { Main } from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/certificates" element={<Experiences />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
