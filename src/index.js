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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
