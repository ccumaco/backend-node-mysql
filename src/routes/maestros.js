const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');


router.get('/maestros', (req, res) => {
  mysqlConnection.query('SELECT * FROM maestros', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});
router.get('/materias', (req, res) => {
  mysqlConnection.query('SELECT * FROM materias', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An maestros
router.get('/:idmaestros', (req, res) => {
  const { idmaestros } = req.params; 
  mysqlConnection.query('SELECT * FROM maestros WHERE idmaestros = ?', [idmaestros], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An maestros
router.delete('/:idmaestros', (req, res) => {
  const { idmaestros } = req.params;
  mysqlConnection.query('DELETE FROM maestros WHERE idmaestros = ?', [idmaestros], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'maestro eliminado con el id:' + idmaestros});
    } else {
      console.log(err);
    }
  });
});

// INSERT An maestros
router.post('/maestro', (req, res) => {
  const {idmaestros, nombre, materia_id, apellido, edad, salario, calificacion} = req.body;
  const query = `
    CALL maestrosAddOrEdit(?, ?, ?, ?, ?, ?,?);
  `;
  mysqlConnection.query(query, [idmaestros, nombre,materia_id, apellido, edad, salario, calificacion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'maestro creado con el id:'+ req.body.idmaestros});
    } else {
      console.log(err);
    }
  });

});

// INSERT An materia
router.post('/materia', (req, res) => {
    const {idmaterias, nombreMateria,semestreMateria} = req.body;
    const query = `
        INSERT INTO instructores.materias (idmaterias, nombreMateria, semestreMateria)  values( ?, ?, ? );
    `;
    mysqlConnection.query(query, [idmaterias, nombreMateria,semestreMateria], (err, rows, fields) => {
      if(!err) {
        res.json({status: 'materia creada con el id:'+ req.body.idmaterias});
      } else {
        console.log(err);
      }
    });
  
  });

router.put('/:idmaestros', (req, res) => {
    const {nombre, materia_id,apellido, edad, salario, calificacion} = req.body;
  const { idmaestros } = req.params;
  const query = `
    CALL maestrosAddOrEdit(?,?, ?, ?,?, ?, ?);
  `;
  mysqlConnection.query(query, [idmaestros, nombre, materia_id,apellido, edad, salario, calificacion], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'maestro actualizado con el id' + idmaestros});
    } else {
      console.log(err);
    }
  });
});

module.exports = router;