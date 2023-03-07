const DEFAULT_PARAMS = {
    "model": "text-ada-002",
    "temperature": 1,
    "max_tokens": 256,
}

export async function query(apiKey: string, params = {}) {
    const params_ = { ...DEFAULT_PARAMS, ...params };
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(params_)
    };
    const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
    return await response.json();
    // return {
    //     "choices": [{ "text": "Hello World!" }] // for testing
    // }
}