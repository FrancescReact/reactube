import './App.css';
import Search from './components/search';
import './styles.css'
import VideoList from './components/videoList';
import Videoplayer from './components/videoPlayer';
import { useState } from 'react'
import api from './components/api';


function App() {

  const [input, setInput] = useState ({
    videoMetadataInfo :null,
    selectedVideoId: null
   
})
console.log(input.videoMetadataInfo, input.selectedVideoId)


 const  onSearch = async ()=>{
  const response = await api.get("/search",{
    params:{
      q:''
    }
    
  });
  setInput({
    videoMetadataInfo: response.data.items,
    selectedVideoId: response.data.items[0].id.videoId

  })
  console.log (response)
  
}

//({dada}) => {
  
  /* axios({
       "method": "GET",
       "url": 'https://www.googleapis.com/youtube/v3/search?q={input}',
       "params": {
           'part': 'snippet',
           'maxResults': '20',
           'key': 'AIzaSyCy02HeM8CMWsipwSljGNA6RbLWPEnhS0w',
            'q': dada,
           'type': 'video'
       }
   })
       .then((res) => {
          console.log(res.data)
           setInput ({selectedVideoId:res.data.items[0].id.videoId   , videoMetadataInfo:res.data.items[1].snippet.title})    
        })
       .catch((error) => {
           console.log(error)
       })*/

  return (
    <div>
      <Search />
      <button onClick={onSearch}>busca</button>
      <Videoplayer />
      <VideoList />
    
    </div>
  );

  }


export default App;
