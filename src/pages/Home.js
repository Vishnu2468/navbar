import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/blogs">Go to Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Go to Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
