const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


exports.getAll = () => prisma.receita.findMany();
exports.getById = (id) => prisma.receita.findUnique({ where: { id } });
exports.create = (data) => prisma.receita.create({ data });
exports.update = (id, data) => prisma.receita.update({ where: { id }, data });
exports.remove = (id) => prisma.receita.delete({ where: { id } });