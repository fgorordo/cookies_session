const rememberMe = (req,res,next) => {
  if (req.cookies.rememberColor && !req.session.color) {
    req.session.color = req.cookies.rememberColor
  }
  next()
}

module.exports = rememberMe;