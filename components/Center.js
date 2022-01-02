import { useSession } from 'next-auth/react';
function Center() {
  const { data: session } = useSession();
  console.log(session?.user?.image)
  return (
    <div className=" flex-grow text-white">
      <h1>Center</h1>
      <header>
        <img
          className="rounded-full w-10 h-10 opacity-90 hover:opacity-80"
          src={
            session?.user?.image
              ? session?.user?.email
              : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3hwxmRfs4cG21fRSmvUsVJWSV2U93IMK4pw&usqp=CAU'
          }
        />
      </header>
    </div>
  );
}

export default Center;
