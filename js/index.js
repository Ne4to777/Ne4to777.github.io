const { axios } = window

axios({
    method: 'post',
    url: 'https://api.convertio.co/convert',
    data: {
        apikey: '_YOUR_API_KEY_',
        file: 'http://google.com/',
        outputformat: 'png'
    }
}).then(console.log)
