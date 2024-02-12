-- CreateTable
CREATE TABLE "logs" (
    "id" SERIAL NOT NULL,
    "application_id" INTEGER NOT NULL,
    "operation" INTEGER NOT NULL,
    "entity" TEXT NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);
