/*
  Warnings:

  - The primary key for the `application` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `application` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `phones` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `phones` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `user_id` on the `phones` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "phones" DROP CONSTRAINT "phones_user_id_fkey";

-- AlterTable
ALTER TABLE "application" DROP CONSTRAINT "application_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "application_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "phones" DROP CONSTRAINT "phones_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "phones_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "payment_cards" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "plataform_name" TEXT NOT NULL,
    "plataform_id" TEXT NOT NULL,
    "card_number_prefix" TEXT NOT NULL,
    "card_number_sufix" TEXT NOT NULL,
    "card_brand" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "payment_cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "phones" ADD CONSTRAINT "phones_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_cards" ADD CONSTRAINT "payment_cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
