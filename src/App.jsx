import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './style/reset.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/work'
import useLenis from './hooks/UseLenis'
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import WorkPage from "./pages/WorkPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import ProductSection from "./components/ProductSection";
import ContactSection from "./components/ContactSection";

function App() {
  useLenis();

  return (
    <>
     <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skill />
              <Work />
              <ProductSection/>
              <ContactSection/>
            </>
          }
        />
        <Route path="/project" element={<ProjectPage />} />
      <Route path="/project/:slug" element={<ProjectDetailPage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkDetailPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App