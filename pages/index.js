import Layout from '../components/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <section className="mt-24">
          <div className="max-w-fit mx-auto">
            <div className="">
              <h2 className="text-3xl md:text-home-callout font-display leading-snug md:leading-none uppercase">
                Indepedent
              </h2>
              <h2 className="text-3xl md:text-home-callout font-display leading-snug md:leading-none uppercase -translate-x-24">
                Front-end
              </h2>
              <h2 className="text-3xl md:text-home-callout font-display leading-snug md:leading-none uppercase">
                Web Developer
              </h2>
            </div>
            <h4 className="text-base font-body text-right translate-x-12">
              <span className="tracking-snug font-light">Welcome to </span>{' '}
              <i className="font-handwritten text-2xl">my</i>{' '}
              <span className="line-through decoration-2 decoration-red-600">
                2021
              </span>{' '}
              2022 <i className="font-handwritten text-2xl">portfolio.</i>
            </h4>
          </div>
        </section>
      </Layout>
    </>
  );
}
