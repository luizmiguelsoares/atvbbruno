import  * as db from  '../repository/matriculaRepository.js';

import { Router } from "express"
const endpoints = Router();

endpoints.get('/aluno', async (req, resp) => {
    try {
        let registros = await db.consultarfrei();
        resp.send(registros);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.post('/aluno/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let id = await db.inserirfrei(pessoa);

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.put('/aluno/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.alterarfrei(id);
        if(linhasAfetadas >= 1) {
            resp.send();
        }
        else{
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

endpoints.delete('/aluno/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await db.removerfrei(id);
        if(linhasAfetadas >= 1) {
            resp.send();
        }
        else{
            resp.status(404).send({ erro: 'Nenhum registro encontrado' })
        }
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default endpoints;
