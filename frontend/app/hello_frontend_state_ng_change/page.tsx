'use client'

import { useEffect } from "react"

export const Page = () => {
  let data = { name: 'Initial Value' }

  useEffect(() => {
    const change = { name: 'Changed Value' };
    data = change;
  }, [])

  return <div>hello {data.name}!</div>
}

export default Page;