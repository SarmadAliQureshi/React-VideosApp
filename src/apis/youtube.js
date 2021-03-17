import axios from 'axios'

const KEY = "AIzaSyCQ32iHgVLhd7qGXAN96qfEHkTPkahVc3k"

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        maxResults:5,
        key:KEY
    }
})