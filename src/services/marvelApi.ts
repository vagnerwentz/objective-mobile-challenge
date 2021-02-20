import Axios from 'axios';
import md5 from 'md5';

const timestamp = new Date().getDate();

const {
  REACT_APP_MARVEL_API_URL = '',
  REACT_APP_MARVEL_PUBLIC_KEY = '',
  REACT_APP_MARVEL_PRIVATE_KEY = ''
} = process.env

export const api = Axios.create({
  baseURL: REACT_APP_MARVEL_API_URL,
  params: {
    apikey: REACT_APP_MARVEL_PUBLIC_KEY,
    ts: timestamp,
    hash: md5(
      timestamp +
      REACT_APP_MARVEL_PRIVATE_KEY +
      REACT_APP_MARVEL_PUBLIC_KEY
    )
  }
});
