-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 30, 2020 at 08:44 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saku_saku_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `top_up`
--

CREATE TABLE `top_up` (
  `id` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `top_up`
--

INSERT INTO `top_up` (`id`, `num`, `description`, `created_at`, `updated_at`) VALUES
(4, 0, 'test', '2020-09-30 15:08:29', '2020-09-30 15:08:29'),
(5, 1, 'Go to the nearest ATM or you can use E-Banking.', '2020-09-30 15:14:02', '2020-09-30 15:14:02'),
(6, 2, 'Type your security number on the ATM or E-Banking.', '2020-09-30 15:14:32', '2020-09-30 15:14:32'),
(7, 3, 'Select “Transfer” in the menu', '2020-09-30 15:15:06', '2020-09-30 15:15:06'),
(8, 4, 'Type the virtual account number that we provide you at the top.', '2020-09-30 15:15:38', '2020-09-30 15:15:38'),
(9, 5, 'Type the amount of the money you want to top up.', '2020-09-30 15:16:18', '2020-09-30 15:16:18'),
(10, 6, 'Read the summary details.', '2020-09-30 15:18:04', '2020-09-30 15:18:04'),
(11, 7, 'Press transfer / top up.', '2020-09-30 15:18:20', '2020-09-30 15:18:20'),
(12, 8, 'You can see your money in Saku Saku within 3 hours.', '2020-09-30 15:21:06', '2020-09-30 15:21:06'),
(13, 8, 'You can see your money in Saku Saku within 3 hours.', '2020-09-30 15:21:56', '2020-09-30 15:21:56');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `income` double NOT NULL,
  `expense` double NOT NULL,
  `notes` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `sender_id`, `receiver_id`, `amount`, `income`, `expense`, `notes`, `created_at`, `updated_at`) VALUES
(2, 1, 2, 1000000, 1000000, 0, 'transfer', '2020-09-30 01:23:38', '2020-09-30 01:23:38'),
(3, 3, 4, 21000, 0, 21000, 'buy coffee', '2020-09-30 01:57:35', '2020-09-30 01:57:35'),
(4, 11, 1, 10000, 0, 10000, 'buy a book', '2020-09-30 01:57:35', '2020-09-30 01:57:35'),
(5, 7, 1, 5000, 5000, 0, 'transfer', '2020-09-30 02:10:10', '2020-09-30 02:10:10'),
(7, 1, 11, 3000, 3000, 0, 'a buy pencil', '2020-09-30 16:28:36', '2020-09-30 16:28:36'),
(8, 1, 11, 3000, 3000, 0, 'a buy pencil', '2020-09-30 16:30:06', '2020-09-30 16:30:06'),
(9, 1, 11, 3000, 3000, 0, 'a buy pencil', '2020-09-30 17:25:42', '2020-09-30 17:25:42'),
(10, 1, 11, 3000, 3000, 0, 'a buy pencil', '2020-09-30 17:32:25', '2020-09-30 17:32:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` int(11) NOT NULL,
  `balance` double NOT NULL,
  `verify` tinyint(1) NOT NULL DEFAULT 0,
  `phone` varchar(20) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `email`, `password`, `pin`, `balance`, `verify`, `phone`, `photo`, `role`, `created_at`, `updated_at`) VALUES
(1, 'awan', 'awan', 'awan@email.com', 'awan', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 10:11:15', '2020-09-28 10:11:15'),
(2, 'bella', 'bella', 'bella@email.com', 'bella', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 10:13:23', '2020-09-28 10:13:23'),
(3, 'sinta', 'sinta', 'sinta@email.com', 'sinta', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 10:25:00', '2020-09-28 10:25:00'),
(4, 'langit', 'langit', 'langit@email.com', 'langit', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 10:26:20', '2020-09-28 10:26:20'),
(7, 'air', 'air', 'air@email.com', 'air', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 14:02:49', '2020-09-28 14:02:49'),
(8, 'bintang', 'bintang', 'bintang@email.com', 'bintang', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 14:03:26', '2020-09-28 14:03:26'),
(9, 'bulan', 'bulan', 'bulan@email.com', 'bulan', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 14:07:28', '2020-09-28 14:07:28'),
(10, 'ocean', 'ocean', 'ocean@email.com', 'ocean', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 14:47:20', '2020-09-28 14:47:20'),
(11, 'herenaa', 'herenaa', 'herenaa@email.com', 'herenaa', 123456, 10000000, 0, '083819000500', '1.jpg', '1', '2020-09-28 15:09:19', '2020-09-28 15:09:19'),
(12, 'biru', 'biru', 'biru@email.com', 'biru', 123456, 10000000, 0, '08123456789', '1.jpg', '1', '2020-09-28 15:09:21', '2020-09-28 15:09:21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `top_up`
--
ALTER TABLE `top_up`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `top_up`
--
ALTER TABLE `top_up`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
