/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.
  - You are about to alter the column `total_price` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal`.

*/
-- AlterTable
ALTER TABLE `products` MODIFY `price` DECIMAL NOT NULL;

-- AlterTable
ALTER TABLE `transactions` MODIFY `total_price` DECIMAL NOT NULL;
