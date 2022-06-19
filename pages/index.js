import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <a href="https://nextjs.org" target="_blank">
            Angela: Next.js{' '}
          </a>
          <Link href="/websites">
            <a target="_blank">.</a>
          </Link>
        </p>
        <p>
          <Link href="/mat">
            <a target="_blank">Mat: Electron</a>
          </Link>
        </p>

        <p>
          <Link href="/charlotte">
            <a target="_blank">Charlotte: Cross site scripting </a>
          </Link>
        </p>

        <p>
          <Link href="/la">
            <a target="_blank">L.A. : IoT - Internet of Things </a>
          </Link>
        </p>
      </section>
    </Layout>
  )
}
