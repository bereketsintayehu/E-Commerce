function loggerMiddleware(req, res, next) {
    const { method, url } = req;
    console.log(`${method} ${url}`);
    next(); 
  }
  
  module.exports = loggerMiddleware;
  