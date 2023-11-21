import { useQuery } from "react-query";
import axios from "axios";
import Planet from "../components/Planet";
import { useState } from "react";

interface PlanetData {
  name: string;
  population: string;
  terrain: string;
}
//ts@ignore
const fetchPlanets = (page: number) => {
  return axios.get(`https://swapi.dev/api/planets/?page=${page}`);
};

const Planets = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery(
    ["planets", page],
    () => fetchPlanets(page)
    // {
    //   // staleTime:0
    //   // cacheTime:300000,
    //   // onError:()=>{},
    //   onSuccess: () => {
    //     console.log("fetched data with out preblemo");
    //   },
    // }
  );

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <div>
      <h2>Planets</h2>

      <button disabled={page === 1} onClick={() => setPage((page) => page - 1)}>
        previous page
      </button>
      <button disabled={page === 6} onClick={() => setPage((page) => page + 1)}>
        next page
      </button>

      {data?.data.results.map((planet: PlanetData) => {
        return <Planet key={planet.name} planet={planet} />;
      })}
    </div>
  );
};

export default Planets;
