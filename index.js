const axios = require('axios');

// axios.get('https://api.nim.aryuuu.ninja/get/nim/ardy')
// .then((response) => {
//   console.log(response.data);
// })
// .catch(err => console.log(err))
const getMhs = async () => {
  const response = await axios.get('https://api.nim.aryuuu.ninja/get/nim/ardy');
  console.log(response.data);
}
getMhs();
// comment 