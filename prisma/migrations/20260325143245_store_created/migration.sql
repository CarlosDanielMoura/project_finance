-- CreateTable
CREATE TABLE "store" (
    "id" BIGSERIAL NOT NULL,
    "publicId" UUID NOT NULL,
    "nome" VARCHAR(200) NOT NULL,
    "cnpj" VARCHAR(18) NOT NULL,
    "rua" VARCHAR(200) NOT NULL,
    "numero" VARCHAR(20) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "telefone" VARCHAR(20) NOT NULL,
    "ativa" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,

    CONSTRAINT "store_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "store_publicId_key" ON "store"("publicId");

-- CreateIndex
CREATE UNIQUE INDEX "store_email_key" ON "store"("email");
