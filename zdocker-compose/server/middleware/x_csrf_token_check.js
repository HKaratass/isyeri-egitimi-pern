const CSRF_COOKIE_NAME = "_XS-RF"
const x_csrf_token_check = (req, res, next) => {
    const X_CSRF_Cookie = req.cookies[CSRF_COOKIE_NAME];
    const X_CSRF_Header = req.get('x-csrf-token');
    if (X_CSRF_Cookie !== X_CSRF_Header)
        // return res.status(419).json({ code: '0x9F', message: "CSRF Token Mismatch" });
        return res.status(419).end();
    next();
}

module.exports = {
    x_csrf_token_check
}