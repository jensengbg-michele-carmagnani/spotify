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
