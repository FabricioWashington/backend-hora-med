const ReceitaRepository = require('../repositories/receita.repository');


exports.getAll = () => ReceitaRepository.getAll();
exports.getById = (id) => ReceitaRepository.getById(id);
exports.create = (data) => ReceitaRepository.create(data);
exports.update = (id, data) => ReceitaRepository.update(id, data);
exports.remove = (id) => ReceitaRepository.remove(id);