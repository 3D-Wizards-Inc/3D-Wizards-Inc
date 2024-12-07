/*
  Warnings:

  - You are about to drop the column `color` on the `Product` table. All the data in the column will be lost.
  - Added the required column `color1` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color2` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color3` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "color",
ADD COLUMN     "color1" "Color" NOT NULL,
ADD COLUMN     "color2" "Color" NOT NULL,
ADD COLUMN     "color3" "Color" NOT NULL;
