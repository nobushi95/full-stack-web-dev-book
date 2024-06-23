'use client'

import { useEffect, useState } from "react";

export const Page = () => {
  const [data, setData] = useState({ name: '' });

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
  }, []);

  return <div>hello {data.name}</div>
}

export default Page;