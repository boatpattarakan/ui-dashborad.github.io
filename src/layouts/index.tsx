import type { FC, ReactNode } from 'react'
import { Fragment } from 'react'

import { default as NextHead } from 'next/head'
import Script from 'next/script'

import Header from './Header'
import Footer from './Footer'

import { ContainerBody } from '@/styles/layout.styled'
import TitleHeader from '@/components/TitleHeader'

interface IProps {
  children: ReactNode
  title: string
}

const PageLayout: FC<IProps> = ({ title, children }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ใส่ข้อมูล',
    url: 'https://www.ใส่ข้อมูล.com/',
    logo: 'https://www.ใส่ข้อมูล.com/images/logo.png',
    description: 'ใส่ข้อมูล',
    sameAs: ['https://www.facebook.com/ใส่ข้อมูล', 'https://lin.ee/ใส่ข้อมูล'],
  }
  return (
    <Fragment>
      <NextHead>
        <title>{'Next js | ' + title}</title>
        <meta name="description" content="ใส่ข้อมูล" />
        <meta name="keywords" content="ใส่ข้อมูล" />
        <meta name="author" content="ใส่ข้อมูล" />
        <link rel="canonical" href="ใส่ข้อมูล" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </NextHead>
      <ContainerBody>
        <Script id="google-analytics">
          {`
            (function (w, d, s, l, i) {
              w[l] = w[l] || []
              w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : ''
              j.async = true
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
              f.parentNode.insertBefore(j, f)
            })(window, document, 'script', 'dataLayer', 'ใส่ข้อมูล');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=ใส่ข้อมูล"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <div>
          <TitleHeader />
          <Header />
          <div className="container mx-auto">{children}</div>
        </div>
        <Footer />
      </ContainerBody>
    </Fragment>
  )
}

export default PageLayout
