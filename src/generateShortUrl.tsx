import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';


const generateShortUrl = async (longUrl: string, shortId: string = '') => {
  const axios = require('axios');
  const api = 'https://pocket-url-api.herokuapp.com/';

  let shortIdDb;
  let shortUrl;

  if (shortId !== '') {
    shortIdDb = await axios
      .get(`${api}urls?shortId=${shortId}`)
      .catch((err) => {
        console.log(err);
      });
    if (shortIdDb.data.data !== null) {
      toast.error('That URL is already in use!', { theme: 'dark' });
      return 'error';
    }
  } else {
    do {
      shortId = nanoid(8);
      shortIdDb = await axios
        .get(`${api}urls?shortId=${shortId}`)
        .catch((err) => {
          console.log(err);
        });
    } while (shortIdDb.data.data !== null);  
  }


  shortUrl = `${api}${shortId}`;

  await axios
    .post(`${api}urls/${shortId}/`, {
      long: longUrl,
    })
    .catch((err) => {
      console.log(err);
    })

  return shortUrl;
}

export default generateShortUrl;