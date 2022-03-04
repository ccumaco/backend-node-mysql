const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database.js');


router.get('/comercios', (req, res) => {
  mysqlConnection.query('SELECT * FROM comercios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});
router.get('/usuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if (!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET An comercios
router.get('/:idcomercio', (req, res) => {
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
router.delete('/:idcomercio', (req, res) => {
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
router.post('/comercio', (req, res) => {
  const { idcomercio, nombre, usuario_id, apellido, edad, salario, calificacion } = req.body;
  const query = `
  INSERT INTO comercios.comercios (idcomercio, nombre, usuario_id,apellido,edad,salario,calificacion)  values( ?, ?, ?, ?, ?, ?, ? );
  `;
  mysqlConnection.query(query, [idcomercio, nombre, usuario_id, apellido, edad, salario, calificacion], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'comercio creado con el id:' + req.body.idcomercio });
    } else {
      console.log(err);
    }
  });

});

// INSERT An usuario
router.post('/usuario', (req, res) => {
  const { idusuario, nombreUsuario, descripcionUsuario } = req.body;
  const query = `
        INSERT INTO comercios.usuarios (idusuario, nombreUsuario, descripcionUsuario)  values( ?, ?, ? );
    `;
  mysqlConnection.query(query, [idusuario, nombreUsuario, descripcionUsuario], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'usuario creada con el id:' + req.body.idusuario });
    } else {
      console.log(err);
    }
  });

});





router.put('/:idcomercio', (req, res) => {
  const { nombre, usuario_id, apellido, edad, salario, calificacion } = req.body;
  const { idcomercio } = req.params;
  const query = `UPDATE comercios SET nombre = ?, usuario_id = ?, apellido = ?, edad = ?, salario = ?, calificacion = ? WHERE idcomercio = ?`;
  mysqlConnection.query(query, [nombre, usuario_id, apellido, edad, salario, calificacion, idcomercio], (err, rows, fields) => {
    if (!err) {
      res.json({ status: 'comercio actualizado con el id' + idcomercio });
    } else {
      res.json({ status: 'error' });
    }
  });
});

module.exports = router;