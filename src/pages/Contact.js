import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Contact</h1>
      <ul>
        <li>
          <Link to="/home">Go to Home</Link>
        </li>
        <li>
          <Link to="/blogs">Go to Blogs</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
