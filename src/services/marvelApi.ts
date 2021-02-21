import Axios from 'axios';
import md5 from 'md5';

const timestamp = new Date().getDate();

import { MARVEL_API, MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from '@env';

export const api = Axios.create({
  baseURL: MARVEL_API,
  params: {
    apikey: MARVEL_PUBLIC_KEY,
    ts: timestamp,
    hash: md5(
      timestamp +
      MARVEL_PRIVATE_KEY +
      MARVEL_PUBLIC_KEY
    )
  }
});
