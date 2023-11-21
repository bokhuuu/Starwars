import { useQuery } from "react-query";
import axios from "axios";
import Person from "../components/Person";

interface PersonData {
  name: string;
  gender: string;
  birth_year: string;
}

const fetchPeople = () => {
  return axios.get("http://swapi.dev/api/people/");
};

const People = () => {
  const { data, isLoading, isError, error } = useQuery("people", fetchPeople);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <div>
      <h2>People</h2>
      {data?.data.results.map((person: PersonData) => {
        return <Person key={person.name} person={person} />;
      })}
    </div>
  );
};

export default People;
