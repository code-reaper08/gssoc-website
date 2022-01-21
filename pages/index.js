import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
        </style>
      </Head>
      {/* Vishwa - https://github.com/GSSoC-Web/gssoc-website/projects/1#card-76402159 */}
      <div className="flex flex-col items-center mb-24">
        <div className="flex flex-col w-[1136px]">
          <p className="text-gray-200 text-5xl font-extrabold mb-10">
            Some of the{" "}
            <span className="text-primary_orange-0 text-5xl font-extrabold">
              participating Organisations!
            </span>
          </p>
          <div className="org__box flex flex-row items-center">
            {/* org1 */}
            <img
              className="w-20 h-auto mr-12"
              src="https://img.icons8.com/color/344/visual-studio-2019.png"
              alt="logo"
            />
            {/* org2 */}
            <img
              className="w-20 h-auto mr-12"
              src="https://img.icons8.com/color/344/visual-studio-2019.png"
              alt="logo"
            />
            {/* org3 */}
            <img
              className="w-20 h-auto mr-12"
              src="https://img.icons8.com/color/344/visual-studio-2019.png"
              alt="logo"
            />
            {/* org4 */}
            <img
              className="w-20 h-auto mr-12"
              src="https://img.icons8.com/color/344/visual-studio-2019.png"
              alt="logo"
            />
            <div>
              <p className="font-serif font-semibold text-3xl text-gray-200">
                and more...
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 













*/}
      <div className="main__wrapper flex flex-col items-center">
        {/* Be a part of GSSoC */}
        <div className="flex flex-col w-[1136px]">
          <p className="text-gray-200 text-5xl font-extrabold mb-10">
            <span className="text-primary_orange-0 text-5xl font-extrabold">
              Be a part of &nbsp;
            </span>
            GSSoC 2022!
          </p>
          <div className="flex flex-col items-center">
            {/* flexbox 1 */}
            <div className="flex flex-row items-start mb-3">
              <Card
                title="Participate in GSSoC 2022"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam"
                buttontext="Register"
              />
              <Card
                title="Be a Mentor"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam"
                buttontext="Register"
              />
            </div>
            {/* flexbox 2 */}
            <div className="flex flex-row items-start">
              <Card
                title="Submit your project"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam."
                buttontext="Know More"
              />
              <Card
                title="Be a Sponsor"
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae libero cumque impedit molestias sequi voluptas delectus laborum, ex quam."
                buttontext="Know More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
