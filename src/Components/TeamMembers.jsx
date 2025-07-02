import { HiAcademicCap } from "react-icons/hi";
import { team } from "../../dummy-data/dummy-data";
import { useFecthTeam } from "./useFecthData";
import Spinner from "./Spinner";

function TeamMembers() {
  const { team: data, isLoading, error } = useFecthTeam();
  console.log(team, isLoading, error, "useFecthData");

  if (isLoading) return <Spinner />;
  return (
    <div className="m-auto mt-3 flex flex-col items-center justify-center space-x-2.5 md:max-w-[1000px] md:flex-row md:bg-gray-100">
      {data.map((team) => (
        <div key={team.name}>
          <img
            src={team.photo}
            alt=""
            className="m-auto my-4 h-60 rounded-full"
          />
          <h4 className="mb-1 font-sans text-2xl text-gray-600">{team.name}</h4>
          <p className="font-light text-gray-600 italic">{team.title}</p>
          <p className="mx-3 mt-2 mb-6 max-w-100 text-gray-600">{team.note}</p>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
