import './App.css';
import Search from './components/search';
import './styles.css'
import VideoList from './components/videoList';
import Videoplayer from './components/videoPlayer';
import { useState } from 'react'
import axios from "axios"
import VideoInfo from './components/videoInfo';

function App() {
  const [searchValue, setSearchValue] = useState();
  const [input, setInput] = useState('');
  const [meta, setMeta] = useState({
    videoMetadataInfo: []
  });

  const [videoSnippetSelected, setVideoSnippetSelected] = useState();

  const onSearch = () => {
    axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/search',
      "params": {
        'part': 'snippet',
        'maxResults': '10',
        'key': 'AIzaSyCy02HeM8CMWsipwSljGNA6RbLWPEnhS0w',
        'q': `${searchValue}`,
        'type': 'video'
      }
    })
      .then((res) => {
        setMeta({ videoMetadataInfo: res.data.items })
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className="fons">
      <div className="capçal">
        <header className="header">
          <h2>Busca Videos APP</h2>
        </header>
      </div>
      <Search handleSetSearchValue={setSearchValue} />
      <div className="search-form">
        <button type="button" className=" buto" onClick={onSearch}>SEARCH</button>
      </div>
      <div className="wrapper">
        <VideoList data={meta} onVideoSelected={setInput} handleSetVideoSnippetSelected={setVideoSnippetSelected} />
        <div className="main"><Videoplayer videoId={input} /><VideoInfo videoSnippetSelected={videoSnippetSelected} /></div>
        <div className="aside-2"></div>
      </div>
      <div className="footer">peu</div>
    </div>
  );
}
export default App;
