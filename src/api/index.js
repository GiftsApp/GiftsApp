import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export function createClient() {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        }
    });
}

export async function sendRequestWithToken(requestData) {
    const user = 1415473581;
    const client = createClient();

    // Append the userId to the end of the URL
    const urlWithUserId = `${requestData.url}/${user}`;

    try {
        const response = await client({
            ...requestData,
            url: urlWithUserId,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
}