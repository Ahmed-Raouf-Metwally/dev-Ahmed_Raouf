import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";
import { Suspense, lazy, useState } from "react";
import { BrowserRouter } from "react-router-dom";
const Navbar = lazy(() => import("./components/Navbar"));
const Hero = lazy(() => import("./components/sections/Hero"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Education = lazy(() => import("./components/sections/Education"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Contact = lazy(() => import("./components/sections/Contact"));
const Footer = lazy(() => import("./components/sections/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Body>
            <div>
              <Hero />
              <Wrapper>
                <Skills />
                <Experience />
              </Wrapper>
              <Projects />
              <Wrapper>
                <Education />
                <Contact />
              </Wrapper>
              <Footer />
              <ScrollToTop />
            </div>
          </Body>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider >
  );
}

export default App;
