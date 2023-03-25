
import {useEffect} from 'react';
import Works from "./Works"
import Home from "./home"

export default function Main() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      {/* <Home /> */}
      <Works />
    </div>
  );
}