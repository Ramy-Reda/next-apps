import Header from "./Header";
import Head from 'next/head';
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossOrigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
} 
