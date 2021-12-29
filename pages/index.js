import Head from 'next/head';
import Sidebar from '../components/Sidebar';
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Spotify</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="">
        <Sidebar />
        <h1>Index</h1>
      </main>
      {/* <div>player</div> */}
    </div>
  );
}
