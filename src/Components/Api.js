import axios from 'axios'

const userKey='605b5ef127f0050017c06fd7'
export default axios.create({
    baseURL: `https://${userKey}.mockapi.io/comments`
});