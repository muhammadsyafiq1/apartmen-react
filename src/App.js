import "../src/Assets/scss/styles.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from "Pages/LandingPage";
import Example from "Pages/Example";


function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPage}></Route>
        <Route path="/example" component={Example}></Route>
      </Router>
    </div>
  );
}

export default App;
