import express from 'express'
import { getUsuarios, postUsuario } from './usuariosRepository.js';

const app = express()
app.use(express.json());
const port = 3000

app.get('/usuarios', async (req, res) => {  
  const usuarios = await getUsuarios();
  res.json(usuarios);
})

app.post('/usuarios', async (req, res) => {
  console.log(req.body);
  const usuarios = await postUsuario(req.body);
  res.json(usuarios);
})

// app.get('/usuarioshtml', async (req, res) => {
//   try {
//     const usuarios = await getUsuarios(); // [{ id, name, edad }, ...]

//     const rows = usuarios.map(u => `
//       <tr>
//         <td>${u.id}</td>
//         <td>${u.name}</td>
//         <td>${u.edad}</td>
//       </tr>
//     `).join('');

//     const html = `<!doctype html>
// <html lang="es">
// <head>
//   <meta charset="utf-8" />
//   <title>Usuarios</title>
//   <meta name="viewport" content="width=device-width, initial-scale=1" />
//   <style>
//     body { font-family: system-ui, sans-serif; margin: 2rem; }
//     h1 { margin-bottom: 1rem; }
//     table { border-collapse: collapse; width: 100%; }
//     th, td { padding: .6rem .8rem; border: 1px solid #ddd; text-align: left; }
//     thead th { background: #f6f6f6; }
//     tr:nth-child(even) { background: #fafafa; }
//     .wrap { max-width: 900px; margin: 0 auto; }
//   </style>
// </head>
// <body>
//   <div class="wrap">
//     <h1>Lista de usuarios</h1>
//     <table>
//       <thead>
//         <tr><th>ID</th><th>Nombre</th><th>Edad</th></tr>
//       </thead>
//       <tbody>
//         ${rows || '<tr><td colspan="3">Sin datos</td></tr>'}
//       </tbody>
//     </table>
//   </div>
// </body>
// </html>`;

//     res.setHeader('Content-Type', 'text/html; charset=utf-8');
//     res.send(html);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('<h1>Error interno</h1><p>No se pudo cargar la lista de usuarios.</p>');
//   }
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
