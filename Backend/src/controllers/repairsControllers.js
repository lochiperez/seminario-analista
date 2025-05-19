const db = require('../firebase/firebase');
const collection = db.collection('repairs');

const getRepairs = async (req, res) => {
  try {
    const snapshot = await collection.get();
    const trabajos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(trabajos);
  } catch (error) {
    console.log('Error: ',error)
    res.status(500).json({ error: 'Error al obtener reparaciones' });
  }
};

const getRepairById = async (req, res) => {
  try {
    const doc = await collection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: 'Trabajo no encontrado' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener trabajo' });
  }
};

const addRepair = async (req, res) => {
  try {
    const data = req.body;
    const newDoc = await collection.add(data);
    res.status(201).json({ id: newDoc.id });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar trabajo' });
  }
};

const updateRepair = async (req, res) => {
  try {
    const data = req.body;
    await collection.doc(req.params.id).update(data);
    res.json({ message: 'Trabajo actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar trabajo' });
  }
};

const deleteRepair = async (req, res) => {
  try {
    await collection.doc(req.params.id).delete();
    res.json({ message: 'Trabajo eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar trabajo' });
  }
};

module.exports = {
  getRepairs,
  getRepairById,
  addRepair,
  updateRepair,
  deleteRepair
};
