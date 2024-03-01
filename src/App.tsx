import { Login, SearchResults, ThemeToggle } from '@microsoft/mgt-react';
import './App.css';
import React from 'react';

function App() {

  React.useEffect(function setupListener() {
    function changeBackGround(value: any) {
      if(value.detail){
        document.body.style.backgroundColor = "black";
      } else {
        document.body.style.backgroundColor = "white";
      }
    }
    window.addEventListener('darkmodechanged', changeBackGround)

    return function cleanupListener() {
      window.removeEventListener('darkmodechanged', changeBackGround)
    }
  })

  return (
    <>
        <ThemeToggle />
        <Login></Login>
        <SearchResults entityTypes={['driveItem']} fetchThumbnail={true} queryString="*"></SearchResults>
    </>
  );
}

export default App;
