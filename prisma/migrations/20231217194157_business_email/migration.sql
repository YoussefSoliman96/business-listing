/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Business` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Business` ADD COLUMN `email` VARCHAR(191) NOT NULL DEFAULT 'email';

-- CreateIndex
CREATE UNIQUE INDEX `Business_email_key` ON `Business`(`email`);
