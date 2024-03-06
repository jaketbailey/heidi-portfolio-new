import Navbar from "../components/Navbar";
import About from "../components/About"
import Education from "../components/Education";
import PersonalProfile from "../components/PersonalProfile";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <div>
        <Head>
          <title>Heidi Bailey</title>
          <link rel="icon" href="/images/favicon.ico"/>
        </Head>
      <Navbar/>
      <About/>
      <PersonalProfile/>
      <Education/>
      <Contact/>
    </div>
  );
}
