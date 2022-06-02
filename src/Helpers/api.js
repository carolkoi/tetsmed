import axios from 'axios'
// import Auth from '../store/auth'

export function get(url) {
    return axios({
        method: 'GET',
        url: url,
        // headers: {
        //     // 'Authorization': `Bearer ${Auth.state.api_token}`,
        //     'Accept': `application/json`,

        //     // accept:'application/json'.
        // }
    })
}

export function post(url, data) {
    return axios({
        method: 'POST',
        url: url,
        data: data,
        headers: {
            // 'Authorization': `Bearer ${Auth.state.api_token}`
            'Access-Control-Allow-Origin': `*`,
            'Accept': `application/json`,
            'Content-Type': 'application/json'
        }
    })
}