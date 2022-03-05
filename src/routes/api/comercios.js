const express = require('express');
const router = express.Router();

const mysqlConnection = require('../../database.js');


router.get('/get-commerces', (req, res) => {
  mysqlConnection.query('SELECT * FROM comercios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET An comercios
router.get('/commerce/:idcomercio', (req, res) => {
  const { idcomercio } = req.params;
  mysqlConnection.query('SELECT * FROM comercios WHERE idcomercio = ?', [idcomercio], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An comercios
router.delete('/delete/:idcomercio', (req, res) => {
  const { idcomercio } = req.params;
  mysqlConnection.query('DELETE FROM comercios WHERE idcomercio = ?', [idcomercio], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'comercio eliminado con el id:' + idcomercio });
    } else {
      console.log(err);
    }
  });
});

// INSERT An comercios
router.post('/create-commerce', (req, res) => {
  const { idcomercio, nombre,  descripcion, active, promotion, calificacion, image } = req.body;
  const query = `
  INSERT INTO comercios.comercios (idcomercio, nombre, descripcion,active,promotion,calificacion, image)  values( ?, ?, ?, ?, ?, ?,? );
  `;
  mysqlConnection.query(query, [idcomercio, nombre,  descripcion, active, promotion, calificacion, image], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'comercio creado con el id:' + req.body.idcomercio });
    } else {
      console.log(err);
    }
  });

});






router.put('/commerce/:idcomercio', (req, res) => {
  const { nombre, usuario_id, descripcion, active, promotion, calificacion, image } = req.body;
  const { idcomercio } = req.params;
  const query = `UPDATE comercios SET nombre = ?, usuario_id = ?, descripcion = ?, active = ?, promotion = ?, calificacion = ?, image =?, WHERE idcomercio = ?`;
  mysqlConnection.query(query, [nombre, usuario_id, descripcion, active, promotion, calificacion, image, idcomercio], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'comercio actualizado con el id' + idcomercio });
    } else {
      res.json({ status: 'error' });
    }
  });
});

module.exports = router;