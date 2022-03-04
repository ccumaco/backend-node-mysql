const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


router.get('/comercios', (req, res) => {
  mysqlConnection.query('SELECT * FROM comercios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/usuarios', (req, res) => {
  mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An comercios
router.get('/:idcomercios', (req, res) => {
  const { idcomercios } = req.params; 
  mysqlConnection.query('SELECT * FROM comercios WHERE idcomercios = ?', [idcomercios], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An comercios
router.delete('/:idcomercios', (req, res) => {
  const { idcomercios } = req.params;
  mysqlConnection.query('DELETE FROM comercios WHERE idcomercios = ?', [idcomercios], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'comercio eliminado con el id:' + idcomercios});
    } else {
      console.log(err);
    }
  });
});

// INSERT An comercios
router.post('/comercio', (req, res) => {
  const {idcomercios, nombre, usuario_id, apellido, edad, salario, calificacion} = req.body;
  const query = `
    CALL comerciosAddOrEdit(?, ?, ?, ?, ?, ?,?);
  `;
  mysqlConnection.query(query, [idcomercios, nombre,usuario_id, apellido, edad, salario, calificacion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'comercio creado con el id:'+ req.body.idcomercios});
    } else {
      console.log(err);
    }
  });

});

// INSERT An usuario
router.post('/usuario', (req, res) => {
    const {idusuarios, nombreUsuario,semestreUsuario} = req.body;
    const query = `
        INSERT INTO instructores.usuarios (idusuarios, nombreUsuario, semestreUsuario)  values( ?, ?, ? );
    `;
    mysqlConnection.query(query, [idusuarios, nombreUsuario,semestreUsuario], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'usuario creada con el id:'+ req.body.idusuarios});
      } else {
        console.log(err);
      }
    });
  
  });

router.put('/:idcomercios', (req, res) => {
    const {nombre, usuario_id,apellido, edad, salario, calificacion} = req.body;
  const { idcomercios } = req.params;
  const query = `
    CALL comerciosAddOrEdit(?,?, ?, ?,?, ?, ?);
  `;
  mysqlConnection.query(query, [idcomercios, nombre, usuario_id,apellido, edad, salario, calificacion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'comercio actualizado con el id' + idcomercios});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;