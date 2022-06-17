import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>NEXT.JS website examples</title>
      </Head>

      <Image
        priority
        src="/images/nextjs-examples.png"
        height={800}
        width={1000}
      />

      <li>Page-based routing create a page by putting components in pages</li>
      <li>A built-in router (no need to install React Router)</li>
      <li>Built-in support for CSS and Sass </li>
      <li>Super fast builds for development / production</li>
      <li>Render: both client-side-render and server-side-rendering</li>
    </Layout>
  )
}
