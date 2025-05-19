const db = require('../firebase/firebase')

exports.getUsers = async (req, res) =>{
    try{
        const snapshot = await db.collection('Usuarios').get()
        const users = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
        res.json(users)
    }catch(error){
        res.status(500).json({error:'Error al obtener los usuarios'})
    }
}

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const doc = await db.collection('Usuarios').doc(id).get();
      if (!doc.exists) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      res.json({ id: doc.id, ...doc.data() });
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario' });
    }
  };
  
  exports.createUser = async (req, res) => {
    try {
      const newUser = req.body;
      const docRef = await db.collection('Usuarios').add(newUser);
      res.status(201).json({ id: docRef.id });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear el usuario' });
    }
  };
  
  exports.updateUser = async (req, res) => {
    const { id } = req.params;
    try {
      await db.collection('Usuarios').doc(id).update(req.body);
      res.json({ message: 'Usuario actualizado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar el usuario' });
    }
  };
  
  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      await db.collection('Usuarios').doc(id).delete();
      res.json({ message: 'Usuario eliminado' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el usuario' });
    }
  };