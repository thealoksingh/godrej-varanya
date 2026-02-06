const axios = require('axios');

const INDEXNOW_KEY = 'c8f64c3db48b4223bb6088dac76da82d';
const HOST = 'godrejkhargar.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const urlList = [
  `https://${HOST}/`,
  `https://${HOST}/highlight`,
  `https://${HOST}/about`,
  `https://${HOST}/price`,
  `https://${HOST}/amenities`,
  `https://${HOST}/floorplan`,
  `https://${HOST}/location`,
  `https://${HOST}/gallery`,
  `https://${HOST}/privacy`
];

async function submitToIndexNow() {
  try {
    const response = await axios.post('https://api.indexnow.org/indexnow', {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urlList
    }, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    });

    console.log('✅ URLs submitted successfully to IndexNow');
    console.log('Status:', response.status);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('❌ Error submitting URLs:', error.response?.status, error.response?.data || error.message);
  }
}

submitToIndexNow();
