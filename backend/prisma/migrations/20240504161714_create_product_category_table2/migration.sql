/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Double`.
  - You are about to alter the column `total_price` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Double`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price` DOUBLE NOT NULL;

-- AlterTable
ALTER TABLE `transactions` MODIFY `total_price` DOUBLE NOT NULL;
