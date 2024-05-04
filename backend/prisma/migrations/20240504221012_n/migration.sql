-- AlterTable
ALTER TABLE `categories` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `products` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `roles` ALTER COLUMN `created_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `transactions` ALTER COLUMN `created_at` DROP DEFAULT;
