
import React from 'react';
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import CategoryPhotos from "./CategoryPhotos"

export default function Works() {
  return (
    <div>
      {/* <div>
        <h3>Choose the category</h3>
      </div> */}
      <CategoryPhotos/>
      {/* <Page1 />
      <Page2 />
      <Page3 /> */}
    </div>
  );
}