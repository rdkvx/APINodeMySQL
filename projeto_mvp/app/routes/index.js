const usuario = require('./usuario.routes');
const questao = require('./questao.routes');
const hardskill = require('./hardskill.routes');
const professor = require('./professor.routes');
const turma = require('./turma.routes');
const disciplina = require('./disciplina.routes');
const curso = require('./curso.routes');

module.exports = app => {
    app.use('/api/usuario', usuario);
    app.use('/api/questao', questao);
    app.use('/api/hardskill', hardskill);
    app.use('/api/professor',professor);
    app.use('/api/turma', turma);
    app.use('/api/disciplina', disciplina);
    app.use('/api/curso', curso);
}