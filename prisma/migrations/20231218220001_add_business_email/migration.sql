/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Business` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Business` DROP FOREIGN KEY `Business_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Business` DROP COLUMN `ownerId`,
    ADD COLUMN `email` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Business_email_key` ON `Business`(`email`);
