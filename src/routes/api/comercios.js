const express = require('express');
const router = express.Router();
const { Comercios } = require('./../../database');


// GET all comercios
router.get('/', async (req, res) => {
  const comercios = await Comercios.findAll();
  res.json(comercios);
})

// crear comercio
router.post('/', (req, res) => {
  const comercios = Comercios.create(req.body);
  res.json(comercios);
})


//comercio por id
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const comercio = await Comercios.findByPk(id);
  if (comercio) {
    res.json(comercio);
  } else {
    res.json({ message: 'No se encontro la categoria' });
  }
})

// actualizar comercio
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const comercios = await Comercios.findByPk(id);
  if (comercios) {
    const { nombre, descripcion, active, promotion, calificacion, image } = req.body;
    const updated = await comercios.update({ nombre, descripcion, active, promotion, calificacion, image });
    res.json(updated);
  } else {
    res.json({ message: 'No se encontro la comercio' });
  }
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const comercios = await Comercios.findByPk(id);
  if (comercios) {
    const deleted = await comercios.destroy();
    res.json(deleted);
  } else {
    res.json({ message: 'No se encontro la comercio' });
  }
})

module.exports = router;