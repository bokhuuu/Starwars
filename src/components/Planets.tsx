import { useQuery } from "react-query";
import axios from "axios";
import Planet from "../components/Planet";

interface PlanetData {
  name: string;
  population: string;
  terrain: string;
}

const fetchPlanets = () => {
  return axios.get("http://swapi.dev/api/planets/");
};

const Planets = () => {
  const { data, isLoading, isError, error } = useQuery("planets", fetchPlanets);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <div>
      <h2>Planets</h2>
      {data?.data.results.map((planet: PlanetData) => {
        return <Planet key={planet.name} planet={planet} />;
      })}
    </div>
  );
};

export default Planets;
