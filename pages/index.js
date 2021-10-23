import Head from 'next/head'
import Header from "../components/Header";

export default function Home() {
  return (
      // this is the reason why it is centered and the height is adjusted perfectly
    <div className="">
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
