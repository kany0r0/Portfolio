import Layout from '../components/layout';

export default function AboutStack() {
  return (
    <Layout>
      <div className="flex flex-col md:ml-12 border-l">
        <div className="pl-4 md:pl-20 pt-4 md:pt-16 pb-2 md:pb-10">
          <p className="font-body font-light md:w-2/5 text-sm leading-snug mb-28">
            I like to think of myself as the architect, a web space architect. One who
            is able to translate thoughts and ideas to realistic, functionally
            sound and aesthetically pleasing web assets. Some of the
            technologies in my toolset used to undertake such projects include but
            are not limited to, Javascript, React, Typescript, Nextjs, Git, Wordpress, Figma. For any project
            I'm involved in, I guarantee 3 things:
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
                User Interface design is not about buttons and menus; its about
                the interaction between the user and the application. The way
                that user accomplishes tasks with that product. To the user, the
                interface is the product. Hence why, given impact of this
                element, I spend the almost time getting your products interface
                right.
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
                your site is one of the most paramount aspects to a user. I pay
                great emphasis on the perfomance of your project by being
                mindful of the assets utilized and also respecting and adhering
                to the best pratices of every tool I use.
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
                Coming together is the beginning. Keeping together is progress.
                Working together is success. I develop your product by listening
                to your needs, desires, opinions while also inputting my
                technical advice to achieve the best result in this process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
