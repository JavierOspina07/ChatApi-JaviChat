const {
  errorLogger,
  ormErrorHandler,
  errorHandler,
  notFoundErrorHandler,
  jwtErrorHandler,
<<<<<<< HEAD
} = require('../middlewares/errors.middleware')

const errorRoutes = app => {
  app.use(errorLogger) // mostramos el error por consola
  app.use(ormErrorHandler) // buscamos si el error es del ORM
  app.use(jwtErrorHandler)
  app.use(errorHandler) // Errores personales
  app.use(notFoundErrorHandler) // mandamos 404 para rutas no encontradas
}
=======
} = require("../middlewares/errors.middleware");

const errorRoutes = (app) => {
  app.use(errorLogger); // mostramos el error por consola
  app.use(ormErrorHandler); // buscamos si el error es del ORM
  app.use(jwtErrorHandler);
  app.use(errorHandler); // Errores personales
  app.use(notFoundErrorHandler); // mandamos 404 para rutas no encontradas
};
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653

module.exports = errorRoutes
