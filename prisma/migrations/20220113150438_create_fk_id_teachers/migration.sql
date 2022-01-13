/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_teachers]` on the table `courses` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fk_id_teachers` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_teachers" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachers_name_key" ON "teachers"("name");

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_teachers_key" ON "courses"("fk_id_teachers");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teachers_fkey" FOREIGN KEY ("fk_id_teachers") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
