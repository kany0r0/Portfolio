import Layout from '../components/layout';
import { css, cx } from '@emotion/css';
import Image from 'next/image';
import bicycle from '../public/library.jpg';

export default function About() {
  return (
    <Layout>
      <div className={cx(about_intro_picture, 'w-2/5 -z-50')}>
        <Image src={bicycle} className="max-w-max" alt="Picture of the author" layout="fill" />
      </div>

      <div className="text-7xl font-display font-normal tracking-normal leading-tight px-10 pt-16">
        <h2 className="translate-x-20">
          <span className="font-cursive italic">Hey!</span> I'm Keneth, a
        </h2>
        <h2 className="translate-x-28">
          lover of rugby, travelling <span className="font-cursive italic">and</span>
        </h2>
        <h2>web development. Currently</h2>
        <h2 className="translate-x-28">
          {' '}
          based <span className="font-cursive italic">in</span> Nairobi, Kenya.
        </h2>
      </div>
    </Layout>
  );
}

const about_intro_picture = css`
  height: 100%;
  overflow: hidden;
  position: fixed;
  right: 0;
  object-fit: contain;
`;
