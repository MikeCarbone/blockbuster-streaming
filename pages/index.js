import Head from 'next/head'
import Link from 'next/link'

import Carousel from '../molecules/carousel'

import movies from '../movies';
const continueWatching = movies.slice(0, 3);
const newReleases = movies.slice(3, 20);
const comedies = movies.slice(20, 35);
const action = movies.slice(35, 45);
const popular = movies.slice(45, 60);
const bbhits = movies.slice(60, 75);


import { Box, Button, Footer, Heading, Global, Image, Wrapper, VertSpace } from 'blockbuster-design-system'

const MovieCard = props => (
    <div className="movie">
      <Link href={`/movies/${props.movie.id}`}>
        <a>
          <Image width="300" src={props.movie.posterurl} />
        </a>
      </Link>
      <style jsx>{`
        .movie {
          border: 2px solid transparent;
          margin: 10px 100px 0 0;
          padding: 5px;
          transition: var(--transition);
        }

        .movie img {
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .movie:hover {
          border: 2px solid var(--gold);
          transition: var(--transition);
        }
      `}</style>
    </div>
);

const ScrollSection = props => (
  <Box {...props} backgroundColor="var(--black)" className="scroll-section">
    <Wrapper>
      <Heading size={2}>{props.title}</Heading>
      <VertSpace />
      <Box backgroundColor="var(--black)" flexWrap="nowrap" overflowX="scroll" className="scroll-section__cont">
        {props.children}
      </Box>
    </Wrapper>
    <style jsx>{`
        .scroll-section__cont {
        }
    `}</style>
  </Box>
);

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <Global />
        <Carousel />

        <Box backgroundColor="var(--black)">
          <Wrapper>
            <VertSpace size={2}/>
            <Box backgroundColor="var(--black)" justifyContent="space-between">
              <Button href="#new-releases">New Releases</Button>
              <Button href="#popular">Popular</Button>
              <Button href="#blockbuster-hits">Blockbuster Hits</Button>
            </Box>
            <VertSpace size={2} />
          </Wrapper>
        </Box>
        <ScrollSection title="Continue Watching">
          {
            continueWatching.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
        <ScrollSection id="new-releases" title="New Releases">
          {
            newReleases.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
        <ScrollSection id="popular" title="Popular">
          {
            popular.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
        <ScrollSection id="blockbuster-hits" title="Blockbuster Hits">
          {
            bbhits.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
        <ScrollSection title="Action and Adventure">
          {
            action.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
        <ScrollSection title="Comedies">
          {
            comedies.map((movie, index) => {
              if (movie.posterurl.length < 25) { return }
              return <MovieCard movie={movie} key={index} />
            })
          }
        </ScrollSection>
        <VertSpace size={3} />
      </main>
      <Footer />

      <style jsx>{`
          body {
          }

          main {
            background-color: var(--black);
            scroll-behavior: smooth;
          }
      `}</style>
    </div>
  )
}
