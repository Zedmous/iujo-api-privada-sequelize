const { Router } = require('express');
const { loginUser,allUser, createUser, updateUser, deleteUser, patchUser } = require('../controllers/user.controller');
const router = Router();

router.post(
    '/login',
    loginUser);

router.get(
    '/',
    allUser);

router.post(
    '/register',
    createUser)

router.put(
    '/:id',
    updateUser)

router.delete(
    '/:id',
    deleteUser)

module.exports = router;