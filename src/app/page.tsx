'use client';

import EyesFooter from '@/components/Footer';
import ImageRevealGrid from '@/components/ImageRevealGrid';
import TrailContainer from '@/components/TrailContainer';
import AnimatedLink from '@/components/AnimatedLink';
import { useState } from 'react';
import ShowcaseScroll from '@/components/ShowcaseScroll';
import LodegriaAnimation from '@/components/LodegriaAnimation';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
    <ShowcaseScroll/>
     <EyesFooter/>
    </>
  );
}
