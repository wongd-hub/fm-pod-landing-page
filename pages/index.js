import Head from 'next/head'
import Image from 'next/image'

import bgDesktop from '../static/assets/desktop/image-host.jpg'
import bgTablet from '../static/assets/tablet/image-host.jpg'
import bgMobile from '../static/assets/mobile/image-host.jpg'

import bgPattern from '../static/assets/desktop/bg-pattern-dots.svg'

import logo from '../static/assets/desktop/logo.svg'

import podcastApple from '../static/assets/desktop/apple-podcast.svg'
import podcastSpotify from '../static/assets/desktop/spotify.svg'
import podcastGoogle from '../static/assets/desktop/google-podcasts.svg'
import podcastPocket from '../static/assets/desktop/pocket-casts.svg'

import Input from '../components/Input'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" type="image/png" sizes="32x32" href="./public/favicon-32x32.png"/>
        <title>Frontend Mentor | Pod request access landing page</title>
      </Head>

      <main>
        <div className="site-container">
          <div className="landing-container">
            <div className="logo">
              <Image
                src={logo}
                alt=""
              />
            </div>
            <div className="access-card">
              <h1>Publish your podcasts<br/> <span>everywhere.</span></h1>
              <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
              Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
              <Input />
              <div className="partners">
                <Image src={podcastSpotify} alt="" layout='fixed' />
                <Image src={podcastApple} alt="" layout='fixed' />
                <Image src={podcastGoogle} alt="" layout='fixed' />
                <Image src={podcastPocket} alt="" layout='fixed'/>
              </div>
            </div>
            <div className="deco-img"></div>
            <div className="deco-pattern">
              <Image
                  src={bgPattern}
                  alt=""
                  layout='fixed'
              />
            </div>
          </div>

        </div>
      </main>

      <footer>

      </footer>
    </div>
  )
}
