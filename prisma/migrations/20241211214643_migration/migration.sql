/*
  Warnings:

  - The values [BABY_DRAGON] on the enum `Option` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Option_new" AS ENUM ('CRYSTAL_DRAGON', 'WINGED_CRYSTAL_DRAGON', 'MECHANICAL_DRAGON', 'IMPERIAL_DRAGON', 'FROG', 'AXOLOTL', 'GECKO', 'RAT', 'FERRET', 'KNIGHT', 'SAMURAI');
ALTER TABLE "Product" ALTER COLUMN "option" TYPE "Option_new" USING ("option"::text::"Option_new");
ALTER TYPE "Option" RENAME TO "Option_old";
ALTER TYPE "Option_new" RENAME TO "Option";
DROP TYPE "Option_old";
COMMIT;
