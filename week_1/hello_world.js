console.log("Hello World!, I'm Pranay Sinha")

const http = require('http')
const port = 3000
const host = "localhost"

const server = http.createServer(function(req, res){
    res.write('Hello World!')
    res.end()
})

server.listen(port, function(error) {
    if (error) {
        console.error(error)
    } else {
        console.log('\nThe Server is listening on port ' + port + "\nCheck it out at: http://" + host + ":" + port)
    }
})