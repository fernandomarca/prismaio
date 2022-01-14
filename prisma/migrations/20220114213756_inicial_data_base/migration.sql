-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_id_teachers_fkey";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "modules_id" TEXT;

-- AlterTable
ALTER TABLE "modules" ALTER COLUMN "updated_at" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_teachers_fkey" FOREIGN KEY ("fk_id_teachers") REFERENCES "teachers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_modules_id_fkey" FOREIGN KEY ("modules_id") REFERENCES "modules"("id") ON DELETE CASCADE ON UPDATE CASCADE;
