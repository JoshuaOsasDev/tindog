import TeamMembers from "./TeamMembers";

function OurTeam() {
  return (
    <section className="my-6 max-w-[1200px] text-center">
      <hr className="m-auto my-3 w-7 rounded-full border-2 border-gray-700" />
      <h3 className="py-1.5 font-mono text-4xl font-bold text-gray-400 capitalize">
        our <span className="text-red-500">Team</span>
      </h3>
      <TeamMembers />
    </section>
  );
}

export default OurTeam;
