'use client'

import { useEffect, useState } from "react";

export const Page = () => {
  const [data, setData] = useState({ name: 'Initial Value' });

  useEffect(() => {
    const change = { name: 'Changed Value' };
    setData(change);
  }, [])

  return <div>hello {data.name}!</div>
}

export default Page;