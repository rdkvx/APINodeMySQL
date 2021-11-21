const models = require('../db/models');

exports.index = async ()=>{
    const resultado = await models.professor.findAll({
        include: ['usuario']
    });
    return resultado;
}

exports.show = async (id)=>{
    const resultado = await models.professor.findByPk(id);
    return resultado;
}

exports.store = async (professor)=>{
    const resultado = await models.professor.create(professor,{
        include : ['usuario', 'turmas']
    });
    return resultado;
}

exports.update = async(professor, id)=>{
    const resultado = await models.professor.update(professor, 
        {where: {id:id}
    });
    return resultado;
}

exports.destroy = async(id)=>{
    const resultado = await models.professor.destroy( 
        {where: {id:id}
    });
    return resultado;
}