-- CreateTable
CREATE TABLE "Receita" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "medico" TEXT NOT NULL,
    "medicamentos" TEXT NOT NULL,
    "statusReceita" TEXT NOT NULL,
    "dataCriacaoMedico" DATETIME NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL
);
