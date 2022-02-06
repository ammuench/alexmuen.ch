import axios, { AxiosRequestConfig } from 'axios';
import React from 'react';
import Image from "next/image";

import StaticPage from '../components/StaticPage';
import { getTweets, TweetImage } from './api/birds';

interface BirdProps {
  birdImages: TweetImage[];
}

const Birds: React.SFC<BirdProps> = ({ birdImages = [] }): JSX.Element => {
  return (
    <StaticPage pageTitle="alex muench | bird photography">
      <h2 className="c_workPage__header">Bird Photography</h2>
      <p>Below is a recent collection of bird photographs I have taken, you can find more a <a href="https://twitter.com/sharkbreadshark">my Twitter page</a></p>
      <div className="c_bird__imageContainer">
        {/* {
          birdImages.map((birdImg, i) => {
            const bgImgStyle = {
              backgroundImage: `url(${birdImg.mediaUrl})`
            }
            return <div key={`birdpic__${i}`} className="c_birdImageContainer"><div className="c_bird__imgPreview" style={bgImgStyle}></div></div>;
          })
        } */}
        {
          birdImages.map((birdImg, i) => {
            return (
              <div className="c_birdImageContainer">
                <Image
                  src={birdImg.mediaUrl}
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>
            )
          })
        }
      </div>
    </StaticPage>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const birdImages = await getTweets();

  // Pass data to the page via props
  return { props: { birdImages } }
}

export default Birds;