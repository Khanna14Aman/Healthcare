import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
