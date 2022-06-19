import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Mat</title>
      </Head>
      <h2>Topic: Electron </h2>

      <Image priority src="/images/electrons.jpeg" height={800} width={600} />
    </Layout>
  )
}
