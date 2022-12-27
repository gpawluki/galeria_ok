
import React from 'react';
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"

export default function Works() {
  return (
    <div>
      <div>
        <h3>Malarstwo </h3>
      </div>
      <Page1 />
      <div>
        <h3>Rzeźba </h3>
      </div>
      <Page2 />
      <div>
        <h3>Design </h3>
      </div>
      <Page3 />
    </div>
  );
}