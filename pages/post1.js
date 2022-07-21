import Head from 'next/head'
import BlogPost from '../components/BlogPost'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Austin | Blog</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <BlogPost />
   
    </div>
  )
}
