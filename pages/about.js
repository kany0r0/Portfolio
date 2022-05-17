import Header from '../components/header';
import Layout from '../components/layout';
import { css, cx } from '@emotion/css';
import Image from 'next/image';
import bicycle from '../public/library.jpg';

export default function About() {
  return (
    <Layout>
      <div className={cx(about_intro_picture, 'w-2/5 -z-50')}>
        <Image src={bicycle} alt="Picture of the author" layout="fill" />
      </div>

      <div className="text-7xl font-display font-normal tracking-normal leading-tight px-10 pt-16">
        <h2 className="translate-x-20">
          <span className="font-cursive italic">Hey!</span> I'm Keneth,
        </h2>
        <h2 className="translate-x-28">
          a twenty-seven year <span className="font-cursive italic">old</span>
        </h2>
        <h2>front-end developer. Currently</h2>
        <h2 className="translate-x-28">
          {' '}
          based <span className="font-cursive italic">in</span> Nairobi, Kenya.
        </h2>
      </div>
    </Layout>
  );
}

function AboutMe() {
  return (
    <div className="font-body font-light md:text-sm leading-relaxed grid grid-cols-1 md:grid-cols-2 justify-items-center items-center md:gap-x-8 gap-y-8 md:gap-y-20 mt-64 mb-32 w-4/5">
      <div className="px-16">
        <p>
          I've always valued the ability to create, the ability to craft unique
          experiences, the joy in providing value and getting into Web ecosystem
          has enabled me to showcase this skillset, and since then, I try to
          push my work to new horizons on each project, always putting quality
          first.
        </p>
      </div>
      <div className="hidden md:block"></div>
      <div className="hidden md:block"></div>
      <div className="pr-48">
        <p>
          After working 2 years in the Publishing industry, I decided to go
          freelance and work on new and exciting ideas surrounded by talended
          people.
        </p>
        <p>
          For each project I work on, I pay particular emphasis to the
          interaction, design style, user journey and performance of your site
          because the aim is for the users to always have a pleasant experience.
        </p>
      </div>
    </div>
  );
}

const about_intro_picture = css`
  height: 100%;
  overflow: hidden;
  position: fixed;
  right: 0;
  object-fit: contain;
`;
