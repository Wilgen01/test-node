import { readFile, writeFile } from 'fs/promises';


async function getUsuarios() {
    const jsonString = await readFile(new URL('./data.json', import.meta.url), 'utf8');
    const data = JSON.parse(jsonString);
    console.log(data.usuarios);
    return data.usuarios;
}

async function postUsuario(usuario) {
    const jsonString = await readFile(new URL('./data.json', import.meta.url), 'utf8');
    const data = JSON.parse(jsonString);
    data.usuarios.push(usuario);
    await writeFile(new URL('./data.json', import.meta.url), JSON.stringify(data, null, 2));
}


export { getUsuarios, postUsuario };
