import con from "./connection.js";


export async function inserirfrei(pessoa) {
    const comando = `
    insert into tb_turma (nm_aluno, ds_sexo, dt_nascimento, ds_email, bt_ativo) 
    values (?, ?, ?, ?, ?);`
    ;

    let resposta = await con.query(comando, [pessoa.aluno, pessoa.sexo, pessoa.nascimento,
        pessoa.email, pessoa.ativo])
        let info = resposta[0];

        return info.insertId;
   }

   export async function consultarfrei() {
    const comando = `
    select
    nm_aluno  aluno,
    ds_sexo  sexo,
    dt_nascimento  nascimento,
    ds_email  email,
    bt_ativo  ativo
    from tb_matricula_turma
    ;`


    let resposta = await con.query(comando);
    let registros = resposta[0];

    return registros;
}

export async function alterarfrei(id, pessoa) {
    const comando = `
    update tb_matricula_aluno
     set nm_aluno = ?,
     ds_sexo = ?,
     dt_nascimento = ?,
     ds_email = ?,
     bt_ativo = ?
     where tb_matricula_aluno= ?;
    ;`

    let resposta = await con.query(comando, [pessoa.aluno, pessoa.sexo, pessoa.nascimento,
        pessoa.email, pessoa.ativo, id]);
    let info = resposta[0];

    return info.affectedRows;
}

export async function removerfrei(id) {
    const comando = `
    delete from tb_matricula_aluno
    where id_aluno = ?
    

    let resposta = await con.query(comando, [id]);
    let info = resposta [0];

    return info.affectedRows;`
}
