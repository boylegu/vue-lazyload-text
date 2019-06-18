import axios from 'axios'
import Mock from './mock'


export function fetch(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}

export default {
  Mock(url, params) {
    return fetch(url, params);
  }
}
