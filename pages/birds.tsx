import axios, { AxiosRequestConfig } from 'axios';
import React, { useState } from 'react';
import Image from "next/image";

import StaticPage from '../components/StaticPage';
import { getTweets, TweetImage } from './api/birds';

interface BirdProps {
  birdImages: TweetImage[];
}

const Birds: React.SFC<BirdProps> = ({ birdImages = [] }): JSX.Element => {
  const [birdModalImg, setBirdModalImg] = useState(null);
  return (
    <StaticPage pageTitle="alex muench | bird photography">
      <h2 className="c_workPage__header">Bird Photography</h2>
      <p style={{ textAlign: 'center' }}>Below is a recent collection of bird photographs I have taken, you can find more a <a href="https://media.ebird.org/catalog?mediaType=photo&searchField=user&userId=USER1787639&sort=upload_date_desc&unconfirmed=incl">on my eBird profile</a></p>
      <p style={{ textAlign: 'center' }}>If you would like to license any photography, or inquire on recent sightings or data I've collected, please reach out to me at <strong>ammuench (at) gmail (dot) com</strong></p>
      <div className="c_bird__imageContainer">
        {
          birdImages.map((birdImg, i) => {
            return (
              <React.Fragment key={`bird__${i}`}>
                <div className="c_birdImageContainer">
                  <Image
                    src={birdImg.mediaUrl}
                    width={200}
                    height={200}
                    objectFit="cover"
                    onClick={() => { setBirdModalImg(birdImg.mediaUrl) }}
                  />
                </div>
                <div className="c_birdImageContainer--mobile">
                  <Image
                    src={birdImg.mediaUrl}
                    width={125}
                    height={125}
                    objectFit="cover"
                    onClick={() => { setBirdModalImg(birdImg.mediaUrl) }}
                  />
                </div>
              </React.Fragment>
            )
          })
        }
      </div>
      {
        birdModalImg &&
        <div className="c_birdModal">
          <img className="c_birdModal__img" src={birdModalImg} />
          <div>
            <button onClick={() => { setBirdModalImg(null) }}>Close</button>
          </div>
        </div>
      }
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