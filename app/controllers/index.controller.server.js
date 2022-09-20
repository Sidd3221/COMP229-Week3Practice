export function helloWorld(req, res, next) {
    res.render('index');
};

export function byeWorld(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Goodbye World');
};