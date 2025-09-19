import { FC } from 'react'

import Head from 'next/head'

const ComingSoon: FC = () => (
  <>
    <Head>
      <meta name="robots" content="noindex" />
      <title>Coming Soon</title>
    </Head>
    <main style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Coming Soon</h1>
      <p>This page is under construction.</p>
    </main>
  </>
)

export default ComingSoon
