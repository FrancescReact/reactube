import axios from "axios"

export default axios.create({

        baseUrl: 'https://www.googleapis.com/youtube/v3',
        params: {
            'part': 'snippet',
            'maxResults': '20',
            'key': 'AIzaSyCy02HeM8CMWsipwSljGNA6RbLWPEnhS0w'
             
        }
    })
           
          

    
