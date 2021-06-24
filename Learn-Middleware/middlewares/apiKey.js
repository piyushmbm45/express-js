function apiKey(req, res, next) {
    const api_key = '1234567'; // global api key we will check this key from user's key
    // after question mark in url it query string
    console.log(req.query.api_key);// see console with req.query and req.query.api_key // req.query returns object
    const userApiKey = req.query.api_key;
    if (userApiKey && (api_key === userApiKey)) {
        next();
    }
    else {
        res.json({ message: 'Not allowed' });

    }

}

module.exports = apiKey;