import { useState, useEffect } from "react";
import { fetchCats } from "../api/catApi";
import CatCard from "../components/CatCard";

const Home = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetchCats().then(setCats);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Random Cat Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cats.map((cat) => (
          <CatCard key={cat.id} image={cat.url} />
        ))}
      </div>
    </div>
  );
};

export default Home;
