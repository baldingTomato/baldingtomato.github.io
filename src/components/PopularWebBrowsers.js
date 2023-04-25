import React from 'react';
import BrowserSection from './BrowserSection.js';
import data from '../data/browserSection.json';

export default function PopularWebBrowsers() {
  return (
    <article>
      <h1>Popular web browsers</h1>
      {data.browsers.map((browser) => (
        <BrowserSection
          name={browser.name}
          logo={browser.logo}
          description={browser.description}
        />
      ))}
    </article>
  );
}
