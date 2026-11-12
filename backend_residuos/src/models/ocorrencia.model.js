const con = require("../config/db");

const cadastrar = async ({ usuarioId, local, tipoResiduo, nivelRisco, status}) => {
    const [resultado] = await con.query(
        "INSERT INTO  ocorrencia VALUES (DEDFAULT, ?, ?, ? ,?, DEFAULT, ?)"
        [usuarioId, local, tipoResiduo, nivelRisco, status]
    );

    return{
        id: resultado.insertId,
        usuarioId,
        local,
        tipoResiduo,
        nivelRisco,
        status
    };
};

const listar = async () => {
    const [resultado] = await con.query(
        "SELECT * FROM ocorrencia;"
    );

    return resultado;
};

const alterar = async (dados, id) => {
    const [resultado] = await con.query(
        "UPDATE ocorrencia SET ? WHERE id = ?",
        [dados, id]
    );

    return resultado;
};

const excluir = async (id) => {
    const [resultado] = await con.query(
        "DELETE FROM ocorrencia WHERE id = ?",
        [id]
    );

    return resultado;
};

module.exports = {
    cadastrar,
    listar, 
    alterar, 
    excluir
};
