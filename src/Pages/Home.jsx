import React from 'react';
import { Hero } from '../components/Hero';
import { FetchData } from '../components/FetchData';

function Home() {
  return (
    <div>
      <Hero />
      <FetchData />
    </div>
  )
};

export default Home;