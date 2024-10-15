const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

const API_KEY = process.env.API_KEY
const BASE_URL = 'https://dify-2.akirafunakoshi.com/v1'

async function sendChatMessage(query) {
    try {
        const response = await axios.post(
            `${BASE_URL}/chat-messages`,
            {
                inputs: {},
                query: query,
                response_mode: 'blocking',
                conversation_id: '',
                user: 'test-user',
            },
            {
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        )

        console.log('応答:', response.data.answer)
    } catch (error) {
        console.error(
            'エラーが発生しました:',
            error.response ? error.response.data : error.message
        )
    }
}

// 使用例
sendChatMessage('Bolt.newについて教えてください')
