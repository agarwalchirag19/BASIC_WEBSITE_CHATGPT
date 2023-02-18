import "./App.css";

import Footer from "../src/components/Footer";
import HomePage from "../src/components/HomePage";
import Navbar from "../src/components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Welcome to my website</h1>
      <p>Here's some content for my website</p>
      <div>
        <HomePage />
      </div>
      <div>
        {/* your website content here */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
