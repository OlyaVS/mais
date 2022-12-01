import { Fragment } from 'react';
import { ReactComponent as HandIcon } from '../../assets/icons/hand.svg';
import heart from '../../assets/pictures/heart.png';

import './about.styles.scss';

const About = () => {
  return (
    <Fragment>
      <div className="about" style={{ backgroundImage: `url("${heart}")` }}>
        <div className="about__container">
          <h2>Mais - web app to digitize your library</h2>
          <p>Mais - from the Finnish word "maisemakortti": a landscape postcard.</p>
          <p>
            This project is a result of our love for combining simple passions - reading and
            traveling.
          </p>
          <p>
            We used to send postcards from all over the world to our loved ones and keep some of
            them for ourselves as bookmarks, because we are huge fans of local bookstores and
            reading paper books. But anyway, a big part of our libraries is digital. And yes,
            sometimes we do forget about books we have, and buy them twice, leave in telegram
            channels, clouds, readers app, emails.
          </p>
          <p>
            <a
              className="about__hand"
              href="mailto:mais_app@aol.com?&body=Hi Five, Mais Team! &subject=Hi Five"
              target="_blank"
              rel="noreferrer"
            >
              <span>
                Hi five <HandIcon /> if you can relate!
              </span>
            </a>
          </p>
          <p className="about__highlight">
            Mais helps to tidy up and organize all kind of books at one place in bookcases with
            themed shelves, and plan your reading.
          </p>
          <p>
            This is a web app MVP in progress for experiments and testing. Any feedback is highly
            welcomed.
          </p>
          <p>
            <a
              className="about__feedback"
              href="mailto:mais_app@aol.com?&body=Hello Mais Team, here is what I think:&subject=Mais App Feedback"
              target="_blank"
              rel="noreferrer"
            >
              Get in touch
            </a>
          </p>
          <p>The first release is coming and will include:</p>
          <ul className="about__release">
            <li>
              <span>saving your library and reading progress after registration</span>
            </li>
            <li>
              <span>sorting books on the shelf in the reading order</span>
            </li>
            <li>
              <span>
                easily adding books by voice command and ISBN barcode scanner for mobile app to
                selected shelf
              </span>
            </li>
            <li>
              <span>batch books moving to another the shelf</span>
            </li>
            <li>
              <span>setting your own pictures and sharing reading goals and progress</span>
            </li>
          </ul>
          <p>
            <a
              className="about__notify"
              href="mailto:mais_app@aol.com?&body=Hello Mais Team, notify me upon first release.&subject=Mais App Release"
              target="_blank"
              rel="noreferrer"
            >
              Click here to stay tuned
            </a>
          </p>

          <p className="about__signature">For book lovers,</p>
          <p className="about__signature">Mais App Team</p>
          <div className="about__postcard">
            <a
              href="mailto:mais_app@aol.com?&body=Hey Mais Team, here is my post address and name for you to send me some nice postcards:&subject=Mais App Release"
              target="_blank"
              rel="noreferrer"
            >
              Get a free nice postcard from team's current location
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
