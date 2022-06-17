import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Charlotte</title>
      </Head>
      <h2>Topic: Cross site scripting by Charlotte</h2>

      <Image priority src="/images/css.jpeg" height={800} width={1000} />
    </Layout>
  )
}
