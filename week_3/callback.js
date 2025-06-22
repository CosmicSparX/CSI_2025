const https = require('https');

function fetchUserApiDataCallback(successCallback, errorCallback) {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    console.log(`Attempting to fetch user data from ${url} (callback-based)...`);

    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            if (res.statusCode >= 200 && res.statusCode < 300) {
                try {
                    const userData = JSON.parse(data);
                    console.log("API data fetched successfully.");
                    successCallback(userData);
                } catch (e) {
                    errorCallback(new Error(`Failed to parse JSON: ${e.message}`));
                }
            } else {
                errorCallback(new Error(`API responded with status code: ${res.statusCode} - ${res.statusMessage}`));
            }
        });

    }).on('error', (err) => {
        console.error("API request failed.");
        errorCallback(new Error(`Network or request error: ${err.message}`));
    });
}

console.log("Starting callback function execution...");

fetchUserApiDataCallback(
    (userData) => {
        console.log("User data received:");
        console.log(JSON.stringify(userData, null, 2));
    },
    (error) => {
        console.error("Error fetching user data:", error.message);
    }
);

console.log("Fetch initiated. Program continues executing while waiting for API response...");
