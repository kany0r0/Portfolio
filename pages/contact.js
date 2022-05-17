import Layout from '../components/layout';
import Link from 'next/link';
import { RiArrowDownFill } from 'react-icons/ri';

export default function Contact() {
  return (
    <Layout>
      <div>
        <h2 className="font-display font-semibold text-xl md:text-11xl leading-none tracking-tight">
          KenethKaranja
        </h2>
      </div>

      <div className="md:w-1/4">
        <h2 className="font-display text-lg md:text-5xl uppercase leading-none">
          Want to discuss a new project?
        </h2>
        <div>
          <span className="md:hidden">
            <RiArrowDownFill />
          </span>
        </div>
      </div>
      <div className="mt-6">
        <Link href="mailto:kenkanyush@gmail.com">
          <a className="inline-block font-cursive italic font-light text-2xl text-portfolio-lime py-3 px-12 border border-portfolio-lime rounded-full">
            Send me an email
          </a>
        </Link>
      </div>

      <div className="mt-16 md:w-1/4">
        <h3 className="text-base font-semibold uppercase">
          Thanks for your visit!
        </h3>
        <p className="text-base font-light uppercase tracking-tight leading-tight">
          You can check out my networks to follow my adventures!
        </p>
      </div>
      <div className="flex flex-row items-center mt-8 font-body font-light text-xs tracking-wide uppercase">
        <Link href="https://linkedin.com/in/karanja-keneth-kanyoro">
          <a className="mr-5">LinkedIn</a>
        </Link>
        <Link href="https://instagram.com/kany0r0">
          <a className="mr-5">Instagram</a>
        </Link>
        <Link href="https://github.com/kany0r0/">
          <a className="">Github</a>
        </Link>
      </div>
    </Layout>
  );
}
