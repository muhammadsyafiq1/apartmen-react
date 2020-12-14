import "../src/Assets/scss/styles.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "Pages/LandingPage";
import Example from "Pages/Example";
import DetailPage from "Pages/DetailPage";
import Checkout from "Pages/Checkout";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailPage}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
