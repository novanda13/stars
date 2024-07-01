-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 06, 2024 at 07:50 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `menua`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` varchar(191) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
('543bacda-861f-4843-ac2a-e9712be1b16e', 'Dessert', '2024-05-09 15:17:47.000'),
('632f65a9-d355-4087-b63c-9bf8ec31b07c', 'Makanan', '2024-05-23 00:30:12.319'),
('fe72c8bb-d8d1-43d6-abb8-dac97403a22d', 'Beverages', '2024-05-23 03:25:48.000');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` varchar(191) NOT NULL,
  `name` varchar(100) NOT NULL,
  `category_id` varchar(191) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(100) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `created_by` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category_id`, `price`, `image`, `status`, `created_at`, `created_by`) VALUES
('1dd5ea6f-a8f7-4475-8684-4030e8a3064f', 'Pudding Bawang', '543bacda-861f-4843-ac2a-e9712be1b16e', 23500, 'pudding.jpg', 1, '2024-05-09 08:32:07.434', 'd9182cce-97bc-4f39-96b1-4ea523446eab'),
('30570334-8d55-4a1b-91bb-579512979554', 'Susu Jelly', '543bacda-861f-4843-ac2a-e9712be1b16e', 13500, 'agar.jpg', 1, '2024-05-09 09:14:39.096', 'd9182cce-97bc-4f39-96b1-4ea523446eab'),
('35a40a48-a2bb-474d-b5b2-d44c9a4eddf1', 'Agar Agar', '543bacda-861f-4843-ac2a-e9712be1b16e', 13500, 'agar.jpg', 1, '2024-05-09 09:01:14.649', 'd9182cce-97bc-4f39-96b1-4ea523446eab'),
('45fecf32-bf3c-4724-b60a-201c99edac21', 'Keripik Kaca', '543bacda-861f-4843-ac2a-e9712be1b16e', 23500, 'pudding.jpg', 1, '2024-05-09 08:59:39.519', 'd9182cce-97bc-4f39-96b1-4ea523446eab'),
('8e601464-9139-418a-b0d9-e2b51c8a0184', 'Soda Gembira', 'fe72c8bb-d8d1-43d6-abb8-dac97403a22d', 22500, 'soda.jpg', 1, '2024-05-22 20:27:32.249', 'd9182cce-97bc-4f39-96b1-4ea523446eab'),
('e998004d-381c-4bcf-995c-26801d04c619', 'Susu Murni', 'fe72c8bb-d8d1-43d6-abb8-dac97403a22d', 13500, 'agar.jpg', 1, '2024-05-13 13:43:22.326', 'd9182cce-97bc-4f39-96b1-4ea523446eab');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` varchar(191) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`) VALUES
('4ccf6160-d97a-4653-b323-53dafe1592a9', 'kasir', '2024-05-04 23:41:56.000'),
('89c1337c-c29a-445b-a98f-b50055e01b2b', 'admin', '2024-05-04 23:41:56.000');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(191) NOT NULL,
  `products` text NOT NULL,
  `total_price` double NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `user_id`, `products`, `total_price`, `created_at`) VALUES
('9dabbb7c-db5f-46e2-a9fb-b8fb2d9d6fa9', 'd9182cce-97bc-4f39-96b1-4ea523446eab', 'Agar-Agar', 69250, '2024-05-23 01:15:24.308');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `role_id` varchar(191) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `picture` varchar(100) NOT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `name`, `role_id`, `phone`, `picture`, `created_at`) VALUES
('1fe33567-594e-4190-9507-44a539da2c7c', 'anjas', '$2a$10$UeegYI5/RtslppgqPgmyFeUIAqLvUk1oaeOoE0BuCzT3tQL3H3A2G', 'example_name', '89c1337c-c29a-445b-a98f-b50055e01b2b', '123245678930', 'https://example.com/picture.jpg', '2024-05-09 09:25:26.720'),
('5e858c86-f766-45e3-a6e8-08e20b8dcea8', 'renaldy', '$2a$10$F8rEASotAVolmuXFJdDS/OsuefXNs4BHDLBkE/STJzA.hz/PqHtnq', 'Muhammad Renaldy', '4ccf6160-d97a-4653-b323-53dafe1592a9', '123467390', 'https://example.com/profile.jpg', '2024-05-04 22:16:21.475'),
('5f20fcad-8515-46d8-b8c5-9ebd85d76c83', 'kasir1', '$2a$10$oUM.VtSbFoSVNU7jnt19HOaJw1c.7uSFxl4uD5/1D3/zykAzWIVyW', 'Kasir 1', '89c1337c-c29a-445b-a98f-b50055e01b2b', '123245678930', 'https://example.com/picture.jpg', '2024-06-06 16:09:55.979'),
('67c855a6-db30-4bc9-8deb-2924f6d8a911', 'Kasir 1', '$2a$10$EO69WSmAzIqyAbAmmtl82uTwei.faVJeLjsLaMcXESn4WKNQaMBjq', 'example_name', '89c1337c-c29a-445b-a98f-b50055e01b2b', '123245678930', 'https://example.com/picture.jpg', '2024-06-06 16:08:08.081'),
('9b2243d8-197f-4dea-8b1a-07cfb14efe92', 'anjasmara', '$2a$10$aMTWPpR/y9vUSnpqI6nP1OkCWazQCfHakD3dCqo8h.vDd.lvYWZZy', 'example_name', '89c1337c-c29a-445b-a98f-b50055e01b2b', '123245678930', 'https://example.com/picture.jpg', '2024-05-09 09:25:28.465'),
('a13be94c-bc56-4abd-931f-19e76377f70a', 'kasir2', '$2a$10$J.ZjoakjBf6wGAGqVa038u.eCdng/C/hw4loKiOxy33IF1z17FYi6', 'Kasir 2', '4ccf6160-d97a-4653-b323-53dafe1592a9', '123245678930', 'https://example.com/picture.jpg', '2024-06-06 16:11:30.096'),
('d9182cce-97bc-4f39-96b1-4ea523446eab', 'edel.kind', '$2a$10$v3zpwVVVLWk2qLsg5cGpmucHSZwTe53Gkr36hqVSvvnXDWlwm9oq2', 'Sigit Wijonarko', '4ccf6160-d97a-4653-b323-53dafe1592a9', '1234567390', 'https://example.com/profile.jpg', '2024-05-04 22:15:07.793'),
('da20292a-36c3-4732-b1d4-e701099774ff', 'ini.adnan', '$2a$10$p6LL.73vBZLKUEZhjPX2YupMwis9K6T8jwR1TMG2buyq7U41D0qOm', 'Muhammad Adnan', '4ccf6160-d97a-4653-b323-53dafe1592a9', '1234567890', 'https://example.com/profile.jpg', '2024-05-04 22:13:09.309');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('230c796e-cc97-4d3f-bbcc-8503b7950c88', '32b567487f2000492c8efb072987b9d1e4e1a42ce91dff043efc7cd3c647a045', '2024-05-04 16:25:31.881', '20240504162531_change_timestamp', NULL, NULL, '2024-05-04 16:25:31.868', 1),
('2f00f64f-b22d-429d-bb7c-ba3bae97ab69', '936127c494f71151c8db3a91f5794773d112ecb879ae1072b593dac8ec1b8c8f', '2024-05-04 16:12:42.107', '20240504161225_create_product_category_table', NULL, NULL, '2024-05-04 16:12:42.014', 1),
('2fca0f68-f130-4f87-8164-53dff889b697', 'dbb77b44127014f118af8ad5d7824fa0555f837a85a0e06b08bb532aea3a7881', '2024-05-09 08:59:24.587', '20240509085924_productsat', NULL, NULL, '2024-05-09 08:59:24.578', 1),
('3368dee6-5d13-4e4f-b917-13c66360f2e0', 'dbb77b44127014f118af8ad5d7824fa0555f837a85a0e06b08bb532aea3a7881', '2024-05-09 08:25:21.703', '20240509082430_date_time_product_default_now', NULL, NULL, '2024-05-09 08:25:21.693', 1),
('34ba2f98-c1d4-4263-b939-860e9b06847b', '32b567487f2000492c8efb072987b9d1e4e1a42ce91dff043efc7cd3c647a045', '2024-05-04 16:25:10.837', '20240504162505_change_timestamp', NULL, NULL, '2024-05-04 16:25:10.823', 1),
('48e919f0-828b-4cb9-9463-631a0e4970e4', '32b567487f2000492c8efb072987b9d1e4e1a42ce91dff043efc7cd3c647a045', '2024-05-04 16:27:11.494', '20240504162711_', NULL, NULL, '2024-05-04 16:27:11.480', 1),
('646d22b6-6904-4bf4-8224-1d7cab0f73f1', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-04 23:15:03.516', '20240504231503_make_username_unique', NULL, NULL, '2024-05-04 23:15:03.505', 1),
('67e6ed7c-b791-4c5b-846b-a3f1801d2d53', '34c2e898a117bdefdb2fad368040da3016c38d6dbb7d2d9ac9f3ad275f1c9ad5', '2024-05-04 16:13:36.864', '20240504161336_', NULL, NULL, '2024-05-04 16:13:36.857', 1),
('7099967d-6866-4bd6-8238-53d9b8bab7e9', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-04 22:10:04.782', '20240504220311_change_time_user', NULL, NULL, '2024-05-04 22:10:04.769', 1),
('85d485fe-5bb0-4202-9d9f-67bebac76a6d', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-04 23:15:43.353', '20240504231543_nothing', NULL, NULL, '2024-05-04 23:15:43.342', 1),
('995afaaa-870c-4f82-b707-ab56fc4bf71f', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-04 22:10:12.129', '20240504221012_n', NULL, NULL, '2024-05-04 22:10:12.119', 1),
('9addc81d-602c-4608-a401-4854201cbf45', '554631e1b8a9ce2f5d821e8b5b102fd0ecf181d09d5c93d7e3ab6c4f58b38e10', '2024-05-04 16:12:25.680', '20240504160036_create_transaction_table', NULL, NULL, '2024-05-04 16:12:25.645', 1),
('b1b9a94e-8446-46a9-a186-05d37dadf93d', 'dbb77b44127014f118af8ad5d7824fa0555f837a85a0e06b08bb532aea3a7881', '2024-05-09 08:35:58.481', '20240509083546_auto_created_at_product', NULL, NULL, '2024-05-09 08:35:58.470', 1),
('d23656b6-b1c5-4b38-8d08-afd735fcaf5e', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-09 08:46:23.424', '20240509084623_created_at_again', NULL, NULL, '2024-05-09 08:46:23.413', 1),
('dba20b07-d420-472d-bac8-dd9f4df0657f', '756240845914410bdeca0030ca4ce7ebde9932fcf4c74f2c8e15742a2802a0ce', '2024-05-04 16:12:25.644', '20240504155240_create_user_role_table', NULL, NULL, '2024-05-04 16:12:25.600', 1),
('e8cd8cc3-797d-4d0d-973f-20a2cb88c5ec', '5515f2b5c5bba672d7954b30fbf40b38a097c9fe7f19a353438aa6782914c69c', '2024-05-09 08:47:15.223', '20240509084715_created_at_2', NULL, NULL, '2024-05-09 08:47:15.212', 1),
('eb7b0caa-2e97-431a-b0ff-1a1d7eebc4b4', '8319c3bed3fb2d13f9e7d5654c0cc2a030f33fdc79d10e0d41e24c5f1cc33b73', '2024-05-04 23:14:36.555', '20240504231413_make_username_unique', NULL, NULL, '2024-05-04 23:14:36.538', 1),
('f2ed21c3-d42f-417f-b64c-11c73d7313c7', '79b8b5dfaf15673e2c519595035eae08681ad943171cb48312e0c1309f552cc0', '2024-05-04 16:17:26.872', '20240504161714_create_product_category_table2', NULL, NULL, '2024-05-04 16:17:26.814', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_created_by_fkey` (`created_by`),
  ADD KEY `products_category_id_fkey` (`category_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_fkey` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_key` (`username`),
  ADD KEY `users_role_id_fkey` (`role_id`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `products_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;