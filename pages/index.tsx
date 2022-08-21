import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/SideBar";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sri Venkateswara College of Engineering</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideBar />
      <div className={styles.inner}>
        <div>Hi</div>
      </div>
    </div>
  );
};

export default Home;
