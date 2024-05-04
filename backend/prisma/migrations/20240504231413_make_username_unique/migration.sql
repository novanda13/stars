/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `categories` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `products` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `roles` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `transactions` ALTER COLUMN `created_at` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);
