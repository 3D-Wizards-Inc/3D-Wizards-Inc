-- CreateEnum
CREATE TYPE "Option" AS ENUM ('CRYSTAL_DRAGON', 'WINGED_CRYSTAL_DRAGON', 'MECHANICAL_DRAGON', 'IMPERIAL_DRAGON', 'BABY_DRAGON', 'FROG', 'AXOLOTL', 'GECKO', 'RAT', 'FERRET', 'KNIGHT', 'SAMURAI');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('x0_5', 'x1', 'x2', 'x3');

-- CreateEnum
CREATE TYPE "Color" AS ENUM ('red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white');

-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "option" "Option" NOT NULL,
    "size" "Size" NOT NULL,
    "color" "Color"[],
    "quantity" INTEGER NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
