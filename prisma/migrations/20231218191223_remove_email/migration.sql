/*
  Warnings:

  - You are about to drop the column `email` on the `Business` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Business_email_key` ON `Business`;

-- AlterTable
ALTER TABLE `Business` DROP COLUMN `email`;
