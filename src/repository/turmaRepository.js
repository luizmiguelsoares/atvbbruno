import con from "./connection.js";

export async function inserirfrei(pessoa) {
    const comando = `
    insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao) 
    values (?, ?, ?, ?, ?, ?);
    ;`

    let resposta = await con.query(comando, [pessoa.turma, pessoa.curso, pessoa.ano,
        pessoa.capacidade, pessoa.ativo, pessoa.inclusao])
        let info = resposta[0];

        return info.insertId;
   }

   export async function consultarfrei() {
    const comando = `
    select
    nm_turma  turma,
    ds_curso  curso,
    nr_ano_letivo  ano,
    qtd_capacidade  notaOdio,
    bt_ativo  ativo,
    dt_inclusao inclusao
 from tb_turma
    ;`


    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarfrei(id, pessoa) {
    const comando = `
    update tb_turma
     set nm_turma = ?,
     ds_curso = ?,
     nr_ano_letivo = ?,
     qtd_quantidade = ?,
     bt_ativo = ?,
     dt_inclusao = ?
     where tb_turma = ?;
    ;`

    let resposta = await con.query(comando, [pessoa.turma, pessoa.curso, pessoa.ano,
        pessoa.capacidade, pessoa.ativo, pessoa.inclusao, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerfrei(id) {
    const comando = `
    delete from tb_turma 
    where id_turma = ?
    

    let resposta = await con.query(comando, [id]);
    let info = resposta [0];

    return info.affectedRows;`
}
