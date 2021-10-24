import Head from 'next/head'
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home() {
  return (
      // this is the reason why it is centered and the height is adjusted perfectly
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide" >
      <Head>
        <title>Instagram </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        {/*Header*/}
        <Header/>

        {/*Feed*/}
        <Feed/>



        {/*Modal*/}
    </div>
  );
}
