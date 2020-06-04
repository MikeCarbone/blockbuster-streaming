import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'
import { Hero } from 'blockbuster-design-system'

const _Carousel = props => (
    <Carousel showThumbs={false} >
          <div>
            <Hero
              video
              imgSrc="./midsommar.mp4"
              alt="Midsommar trailer."
              title="Midsommar"
              subtitle="Bringing new meaning to peaceful trips"
              buttonText="WATCH NOW"
              buttonLink="/page"
              linkWrapper={Link}
              height="500px"
            />
          </div>
          <div>
            <Hero
              video
              imgSrc="./parasite.mp4"
              alt="Parasite trailer"
              title="Parasite"
              subtitle="Step inside Bong Joon-Ho's psychological thriller"
              buttonText="WATCH NOW"
              buttonLink="/page"
              linkWrapper={Link}
              height="500px"
            />
          </div>
          <div>
            <Hero
              video
              imgSrc="./knivesout.mp4"
              alt="Knives Out trailer"
              title="Knives Out"
              subtitle="Murder mystery of the year"
              buttonText="WATCH NOW"
              buttonLink="/page"
              linkWrapper={Link}
              height="500px"
            />
          </div>
        </Carousel>
);

export default _Carousel;
