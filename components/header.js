import Link from 'next/link';
import { BsBriefcaseFill } from 'react-icons/bs';

export default function Header() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between py-3 px-3 border-b">
      <h2 className="font-body text-3xl md:text-sm tracking-tighter md:tracking-tight pb-2 md:pb-0">
        <Link href="/">
          <a className="hover:underline">KenethKanyoro</a>
        </Link>
      </h2>

      <div className="rounded-full border px-5 py-0.5 hidden md:block">
        <h4 className="font-body text-xs font-normal align-baseline">
          <span className="inline-block text-portfolio-lime -mb-0.5">
            <BsBriefcaseFill />
          </span>
          <span className="px-3">Available for freelance work</span>
          <span className="inline-block text-portfolio-lime -mb-0.5">
            <BsBriefcaseFill />
          </span>
        </h4>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center font-light text-lg md:text-xs tracking-tight md:tracking-normal uppercase">
        <h4 className="mr-5">
          <Link href="/about">
            <a className="hover:underline">About</a>
          </Link>
        </h4>
        <h4 className="mr-5">
          <a className="hover:underline">Projects</a>
        </h4>
        <h4 className="mr-5">
          <Link href="/contact">
            <a className="hover:underline">Contact</a>
          </Link>
        </h4>
      </div>
    </section>
  );
}
