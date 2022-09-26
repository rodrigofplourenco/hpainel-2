import Head from 'next/head';
import { ReactNode } from 'react'
import Nav from '../components/Nav';
import TopBar from '../components/TopBar';

interface IDefaultProps {
  children: ReactNode;
}

const Default = ({ children }: IDefaultProps) => {
  return (
    <>
      <Head>
        <title>HPainel</title>
        <meta name="description" content="HPainel by HiSkell" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <article className='flex h-full'>
        <Nav />

        <section className='flex flex-col w-full'>
          <TopBar />

          { children }
        </section>
      </article>

    </>
  )
}

export default Default;
