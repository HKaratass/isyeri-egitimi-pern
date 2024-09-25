module.exports = (req,res,next) => {
    // console.log(`${new Date().toUTCString()} - ${req.method} - ${req.hostname}`);
    // console.log(new Date().toUTCString());
    // console.log(req.method);
    // console.log(req.hostname);
    // console.log(req.url);
    // console.log(req.rawHeaders);
    // console.log(req.httpVersion);
    // console.log(req.socket.remoteAddress);
    // console.log(req.socket.remoteFamily);
    // console.log("body: ",req.body);
    
    // for test
    req.headers['x-forwarded-for'] = "192.168.0.1, 172.168.0.1" //fake ip




    next();
}