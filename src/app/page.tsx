import Head from 'next/head';
import {useState, useEffect, useRef} from "react"
import CountdownTimer from 'C:/Users/HP/wedding-invitation/weeding/components/CountdownTimer';
// import MusicPlayer from '../components/MusicPlayer';
<link rel="stylesheet" href="/styles/Home.module.css"/>

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div >
        <h1>TB. Ahlan & Nisa</h1>
        <p >Kami mengundang anda untuk menghadiri acara pernikahan kami</p>
        <CountdownTimer />
        {/* <MusicPlayer /> */}
        <img src="/img/invitation.jpg" alt="Wedding Invitation" />
        <p >
          AKAD: PUKUL 09.00 - 11.00 WIB<br/>
          RESEPSI: PUKUL 13.00 - 21.00 WIB<br/>
          Pada 123 Anywhere St., Any City<br/>
          Rabu, 11 September 2024
        </p>
      </div>
    </div>
  );
}

export default Home;
