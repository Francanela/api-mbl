/*
  Warnings:

  - Changed the type of `card_number_prefix` on the `payment_cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `card_number_sufix` on the `payment_cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "payment_cards" DROP COLUMN "card_number_prefix",
ADD COLUMN     "card_number_prefix" INTEGER NOT NULL,
DROP COLUMN "card_number_sufix",
ADD COLUMN     "card_number_sufix" INTEGER NOT NULL;
