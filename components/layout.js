import Header from '../components/header';
import Meta from '../components/meta';

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <main>
        <div className="container mx-auto md:px-6 px-0">{children}</div>
      </main>
    </>
  );
}
