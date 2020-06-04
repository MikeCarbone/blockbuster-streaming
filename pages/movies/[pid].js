import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import Head from 'next/head'
import Link from 'next/link'

import movies from '../../movies';
import { Box, Button, Copy, Footer, Header, Heading, Hero, Global, Image, Wrapper, VertSpace } from 'blockbuster-design-system'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

export default function Movie() {
    const [movie, setMovie] = useState(null); 

    useEffect(() => {
      const index = window.location.pathname.slice(8);
      const foundMovie = movies.filter(movie => movie.id == index);
        setMovie(foundMovie[0]);
        console.log(foundMovie[0])
    }, [])

    if (movie === null || movie === undefined) { return <p>Loading...</p>} else {
        console.log(movie);
        return (
          <div className="container">
            <Head>
              <title>{movie.title}</title>
              <link rel="icon" href="/favicon.ico" />
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Roboto:wght@100;300;400&display=swap" rel="stylesheet" />
            </Head>
      
            <main>
              <Global />
              <Hero
                  imgSrc={movie.posterurl}
                  alt="Midsommar trailer."
                  title={`${movie.title} (${movie.year})`}
                  subtitle=""
                  buttonText="Start watching"
                  buttonLink="#"
                  linkWrapper={Link}
                  height="400px"
              />
              <Box backgroundColor="var(--black)">
                <Wrapper>
                    <VertSpace size={2} />
                    <Copy fontWeight="400">{movie.actors.map((actor, index) => <span key={index} className="actor">{actor}</span>)}</Copy>
                    <Copy>{movie.storyline}</Copy>
                    {movie.contentRating ? <Copy>Rating: {movie.contentRating}</Copy> : null}
                    <VertSpace />
                </Wrapper>
              </Box>
            </main>
            <Footer />
      
            <style jsx>{`
              .actor {
                font-size: var(--fontMed);
                font-weight: 400;
                margin: 0 15px 0 0;
              }  
            `}</style>
          </div>
        )
    }
}
