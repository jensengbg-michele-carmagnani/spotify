import { getSession } from 'next-auth/react';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar';
export default function Home() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <main className=" flex ">
        <Sidebar />
        <Center />
      </main>
      {/* <div>player</div> */}
    </div>
  );
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}
