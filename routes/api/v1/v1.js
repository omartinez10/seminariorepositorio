const express = require('express');
const router = express.Router();
const { verifyApiHeaderToken } =
require('./headerVerifyMiddleware');

const {passport, jwtMiddleware} = require('./seguridad/jwtHelper');


router.use(passport.initialize());


//*****routes*****
const pacientesRoutes = require('./pacientes/pacientes');
const expedientesRoutes = require('./expedientes/expedientes');
const seguridadRoutes = require('./seguridad/seguridad');

//public
router.use('/seguridad', verifyApiHeaderToken, seguridadRoutes);

// *****LLAMADA*****

router.use(
    '/pacientes',
    verifyApiHeaderToken,
    jwtMiddleware,
    pacientesRoutes);


router.use('/expedientes', expedientesRoutes);
// router.use('/expedientes', expedientesRoutes);

module.exports = router;