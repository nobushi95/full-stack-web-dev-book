'use client'

import { useState } from "react";

export const Page = () => {
  const [data, setData] = useState({ name: 'Initial Value' });

  const change = { name: 'Changed Value' };
  setData(change);

  return <div>hello { data.name }!</div>
}

export default Page;