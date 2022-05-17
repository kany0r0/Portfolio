import Header from '../components/header';
import Layout from '../components/layout';

export default function AboutStack() {
  return (
    <>
      <Layout>
        <div className="flex flex-col md:ml-12 border-l">
          <div className="pl-4 md:pl-20 pt-4 md:pt-20 pb-2 md:pb-12">
            <p className="font-body font-light md:w-2/5 text-sm leading-snug mb-36">
              A project's scope of work dictates the technology most suited for
              the job but in the case of small projects, I usually work within
              JAMstack to have finer granualar control in the regards to the
              application design and architecture. While for more complex
              projects, I lean on Nextjs and/or Wordpress.
            </p>

            <div className="flex flex-col md:flex-row items-center md:justify-between w-4/5">
              <div className="md:pr-12">
                <h2 className="font-body font-light my-6 text-xl md:text-2xl">
                  <span className="inline-block md:text-xs pr-2 text-lime-400">
                    01.
                  </span>
                  INTERACTION
                </h2>
                <p className="font-body font-light text-base md:text-xs leading-loose">
                  User Interface design is not about buttons and menus; its
                  about the interaction between the user and the application.
                  The way that user accomplishes tasks with that product. To the
                  user, the interface is the product. Hence why, given impact of
                  this element, I spend the almost time getting your products
                  interface right.
                </p>
              </div>
              <div className="md:pr-12">
                <h2 className="font-body font-light my-6 text-xl md:text-2xl">
                  <span className="inline-block md:text-xs pr-2 text-lime-400">
                    02.
                  </span>
                  PERFORMANCE
                </h2>
                <p className="font-body font-light text-base md:text-xs leading-loose">
                  In a continent where data is at a premium, the performance of
                  your site is one of the most paramount aspects to a user. I
                  pay great emphasis on the perfomance of your project by being
                  mindful of the assets utilized and also respecting and
                  adhering to the best pratices of every tool I use.
                </p>
              </div>
              <div>
                <h2 className="font-body font-light my-6 text-xl md:text-2xl">
                  <span className="inline-block md:text-xs pr-2 text-lime-400">
                    03.
                  </span>
                  TEAMWORK
                </h2>
                <p className="font-body font-light text-base md:text-xs leading-loose">
                  Coming together is the beginning. Keeping together is
                  progress. Working together is success. I develop your product
                  by listening to your needs, desires, opinions while also
                  inputting my technical advice to achieve the best result in
                  this process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="border-t px-6 py-2">
        <h2 className="text-xl md:text-4xl font-normal">
          Benefits <i className="font-curisve font-normal">Stack &</i> Benefits{' '}
          <i className="font-curisve font-normal">Stack &</i> Benefits{' '}
          <i className="font-curisve font-normal">Stack &</i> Benefits{' '}
          <i className="font-curisve font-normal">Stack &</i>
        </h2>
      </div>
    </>
  );
}
