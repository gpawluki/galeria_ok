
import React from 'react';
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import Home from "./home"

export default function Main() {
  return (
    <div>
      <Home />
      <Page1 />
      <Page2 />
      <Page3 />
    </div>
  );
}