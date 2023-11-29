import React from 'react'

import { useRouter } from 'next/router'

const PageNotFound = () => {
  const router = useRouter()
  return <p>404</p>
}

export default PageNotFound
