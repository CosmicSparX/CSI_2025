const https = require('https');

function fetchUserApiDataPromise() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    console.log(`Attempting to fetch user data from ${url} (Promise-based)...`);

    return new Promise((resolve, reject) => {
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
                        resolve(userData);
                    } catch (e) {
                        reject(new Error(`Failed to parse JSON: ${e.message}`));
                    }
                } else {
                    reject(new Error(`API responded with status code: ${res.statusCode} - ${res.statusMessage}`));
                }
            });

        }).on('error', (err) => {
            console.error("API request failed.");
            reject(new Error(`Network or request error: ${err.message}`));
        });
    });
}


async function getUserDataAndProcess() {
    console.log("Starting async function execution...");

    try {
        console.log("Awaiting user data from API...");
        const userData = await fetchUserApiDataPromise();
        console.log("User data received:");
        console.log(JSON.stringify(userData, null, 2));
    } catch (error) {
        console.error("Error fetching user data:", error.message);
    } finally {
        console.log("\nAsync function finished.");
    }
}

getUserDataAndProcess();

console.log("Main script continues executing while async function is awaiting API response...");