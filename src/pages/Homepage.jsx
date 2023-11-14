import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Worldwise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
