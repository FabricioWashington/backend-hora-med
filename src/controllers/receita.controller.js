const ReceitaService = require('../services/receita.service');


exports.getAll = async (req, res) => {
    const receitas = await ReceitaService.getAll();
    const receitasComMedicamentos = receitas.map(receita => ({
        ...receita,
        medicamentos: JSON.parse(receita.medicamentos)
    }));
    res.json(receitasComMedicamentos);
};

exports.getById = async (req, res) => {
    const receita = await ReceitaService.getById(Number(req.params.id));
    if (!receita) return res.status(404).json({ message: 'Receita não encontrada' });
    receita.medicamentos = JSON.parse(receita.medicamentos);
    res.json(receita);
};

exports.create = async (req, res) => {
    const data = req.body;
    data.medicamentos = JSON.stringify(data.medicamentos);
    const receita = await ReceitaService.create(data);
    res.status(201).json(receita);
};


exports.update = async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    if (data.medicamentos) {
        data.medicamentos = JSON.stringify(data.medicamentos);
    }
    const receita = await ReceitaService.update(id, data);
    res.json(receita);
};


exports.remove = async (req, res) => {
    await ReceitaService.remove(Number(req.params.id));
    res.status(204).end();
};