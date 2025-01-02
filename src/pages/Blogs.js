import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Blogs</h1>
      <ul>
        <li>
          <Link to="/home">Go to Home</Link>
        </li>
        <li>
          <Link to="/contact">Go to Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
