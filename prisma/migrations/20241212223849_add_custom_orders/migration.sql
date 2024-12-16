-- CreateTable
CREATE TABLE "Custom_Orders" (
    "id" SERIAL NOT NULL,
    "user" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "material1" TEXT NOT NULL,
    "material2" TEXT NOT NULL,
    "material3" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Custom_Orders_pkey" PRIMARY KEY ("id")
);
