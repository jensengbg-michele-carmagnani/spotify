import Head from 'next/head';
import Sidebar from '../components/Sidebar';
export default function Home() {
  return (
    <div className="h-screen bg-black overflow-hidden">
      <main className="">
        <Sidebar />
      </main>
      {/* <div>player</div> */}
    </div>
  );
}
