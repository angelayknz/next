import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>L.A.</title>
      </Head>
      <h2>Topic: IoT - Internet of Things </h2>

      <Image priority src="/images/iot.jpeg" height={800} width={1000} />
    </Layout>
  )
}
