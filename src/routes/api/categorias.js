const express = require('express');
const router = express.Router();
const { Categorias } = require('./../../database');


// GET all comercios
router.get('/', async (req, res) => {
  const categorias = await Categorias.findAll();
  res.json(categorias);
})

// categoria por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const categorias = await Categorias.findByPk(id);
  if (categorias) {
    res.json(categorias);
  } else {
    res.json({ message: 'No se encontro la categoria' });
  }
})

// crear comercio
router.post('/', (req, res) => {
  
  const categorias = Categorias.create(req.body);
  res.json(categorias);
})


// actualizar comercio
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const categorias = await Categorias.findByPk(id);
  if (categorias) {
    const { nombre, descripcion, active, promotion, image } = req.body;
    const updated = await categorias.update({ nombre, descripcion, active, promotion, image });
    res.json(updated);
  } else {
    res.json({ message: 'No se encontro la categoria' });
  }
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const categorias = await Categorias.findByPk(id);
  if (categorias) {
    const deleted = await categorias.destroy();
    res.json(deleted);
  } else {
    res.json({ message: 'No se encontro la categoria' });
  }
})

module.exports = router;