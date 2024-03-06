const UserModel = require('../dao/models/usermodel');


class userController {
    async changeUserRole(req, res) {
        const userId = req.params.uid;
        const newRole = req.body.role;

        try {
            if (newRole !== 'user' && newRole !== 'premium') {
                return res.status(400).json({ error: 'Rol de usuario no válido' });
            }

            const updatedUser = await UserModel.findByIdAndUpdate(userId, { role: newRole }, { new: true });

            if (!updatedUser) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }

            return res.status(200).json(updatedUser);
        } catch (error) {
            console.error(`Error al cambiar el rol del usuario con ID ${userId}:`, error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
}

module.exports = new userController();