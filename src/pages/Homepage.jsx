import { Link } from "react-router-dom";
import AppLayout from "./AppLayout";
function Homepage() {
  
  return (
    <div>
      <AppLayout />
      <h1 className="test">Worldwise</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;
