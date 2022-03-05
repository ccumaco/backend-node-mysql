const express = require('express');
const router = express.Router();
const { Categorias } = require('./../../database');

router.get('/', async (req, res) => {
  const categorias = await Categorias.findAll();
  res.json(categorias);
})

router.post('/', (req, res) => {
  const categorias = Categorias.create(req.body);
  res.json(categorias);
})











// router.get('/get-categorias', (req, res) => {
//   mysqlConnection.query('SELECT * FROM categorias', (err, rows, fields) => {
//     if (!err) {
//       res.json(rows);
//     } else {
//       console.log(err);
//     }
//   });
// });

// // GET An categorias
// router.get('/categoria/:idcategorias', (req, res) => {
//   const { idcategorias } = req.params;
//   mysqlConnection.query('SELECT * FROM categorias WHERE idcategorias = ?', [idcategorias], (err, rows, fields) => {
//     if (!err) {
//       res.json(rows[0]);
//     } else {
//       console.log(err);
//     }
//   });
// });

// // DELETE An categorias
// router.delete('/delete/:idcategorias', (req, res) => {
//   const { idcategorias } = req.params;
//   mysqlConnection.query('DELETE FROM categorias WHERE idcategorias = ?', [idcategorias], (err, rows, fields) => {
//     if (!err) {
//       res.json({ status: 'comercio eliminado con el id:' + idcategorias });
//     } else {
//       console.log(err);
//     }
//   });
// });

// // INSERT An categorias
// router.post('/create-categoria', (req, res) => {
//   const { idcategorias, nombre,  descripcion, active, promocion, imagen } = req.body;
//   const query = `
//   INSERT INTO categorias (idcategorias, nombre, descripcion, active, promocion, imagen)  values( ?, ?, ?, ?, ?, ?,? );
//   `;
//   mysqlConnection.query(query, [idcategorias, nombre, descripcion, active, promocion, imagen], (err, rows, fields) => {
//     if (!err) {
//       res.json({ status: 'comercio creado con el id:' + req.body.idcategorias });
//     } else {
//       console.log(err);
//     }
//   });

// });






// router.put('/categoria/:idcategorias', (req, res) => {
//   const { nombre, usuario_id, descripcion, active, promocion, calificacion, imagen } = req.body;
//   const { idcategorias } = req.params;
//   const query = `UPDATE categorias SET nombre = ?, usuario_id = ?, descripcion = ?, active = ?, promocion = ?, calificacion = ?, imagen =?, WHERE idcategorias = ?`;
//   mysqlConnection.query(query, [nombre, usuario_id, descripcion, active, promocion, calificacion, imagen, idcategorias], (err, rows, fields) => {
//     if (!err) {
//       res.json({ status: 'comercio actualizado con el id' + idcategorias });
//     } else {
//       res.json({ status: 'error' });
//     }
//   });
// });

module.exports = router;