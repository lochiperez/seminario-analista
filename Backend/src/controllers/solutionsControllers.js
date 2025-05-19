const db = require('../firebase/firebase');
const collection = db.collection('solutions');

const getSolutions = async (req, res) => {
  try {
    const snapshot = await collection.get();
    const soluciones = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(soluciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener soluciones' });
  }
};

const getSolutionById = async (req, res) => {
  try {
    const doc = await collection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: 'Solución no encontrada' });
    res.json({ id: doc.id, ...doc.data() });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener solución' });
  }
};

const addSolution = async (req, res) => {
  try {
    const data = req.body;
    const newDoc = await collection.add(data);
    res.status(201).json({ id: newDoc.id });
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar solución' });
  }
};

const updateSolution = async (req, res) => {
  try {
    const data = req.body;
    await collection.doc(req.params.id).update(data);
    res.json({ message: 'Solución actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar solución' });
  }
};

const deleteSolution = async (req, res) => {
  try {
    await collection.doc(req.params.id).delete();
    res.json({ message: 'Solución eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar solución' });
  }
};

module.exports = {
  getSolutions,
  getSolutionById,
  addSolution,
  updateSolution,
  deleteSolution
};
