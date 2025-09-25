"use client";
import dynamic from 'next/dynamic';
import React from 'react';

const SplashCursor = dynamic(() => import('./SplashCursor'), { ssr: false });

export default function ClientSplashCursor() {
  return <SplashCursor />;
}
