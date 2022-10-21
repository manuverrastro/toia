import "bootstrap/dist/css/bootstrap.min.css";
import "../scss/styles.js";
import Header from "./Header.js";
import Main from "./Main.js";
import { BrowserRouter } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const helmetContext = {};

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider context={helmetContext}>
        <Header />
        <Main />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
