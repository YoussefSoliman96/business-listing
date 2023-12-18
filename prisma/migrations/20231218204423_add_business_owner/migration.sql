-- AlterTable
ALTER TABLE `Business` ADD COLUMN `ownerId` VARCHAR(255) NULL;

-- AddForeignKey
ALTER TABLE `Business` ADD CONSTRAINT `Business_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
