-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 07, 2020 at 08:14 PM
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
(12, 8, 'You can see your money in Saku Saku within 3 hours.', '2020-09-30 15:21:06', '2020-09-30 15:21:06'),
(14, 18, 'You can see your money in Saku Saku within 3 hours.', '2020-10-04 23:18:24', '2020-10-04 23:18:24'),
(15, 18, 'You can see your money in Saku Saku within 3 hours.', '2020-10-05 06:50:26', '2020-10-05 06:50:26'),
(16, 100, 'tets', '2020-10-07 18:05:49', '2020-10-07 18:05:49');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `transfer_id` int(11) NOT NULL,
  `income` double NOT NULL,
  `expense` double NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `amount` double NOT NULL,
  `notes` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transfer`
--

INSERT INTO `transfer` (`id`, `sender_id`, `receiver_id`, `amount`, `notes`, `created_at`, `updated_at`) VALUES
(2, 1, 2, 1000000, 'transfer', '2020-09-30 01:23:38', '2020-09-30 01:23:38'),
(5, 7, 1, 5000, 'transfer', '2020-09-30 02:10:10', '2020-09-30 02:10:10'),
(7, 1, 11, 3000, 'a buy pencil', '2020-09-30 16:28:36', '2020-09-30 16:28:36'),
(8, 2, 7, 350000, 'transfer', '2020-09-30 16:30:06', '2020-09-30 16:30:06'),
(9, 3, 8, 45000, 'transfer', '2020-09-30 17:25:42', '2020-09-30 17:25:42'),
(10, 1, 11, 380000, 'a buy keyboard', '2020-09-30 17:32:25', '2020-09-30 17:32:25'),
(11, 13, 11, 30000, 'a buy coffee', '2020-10-01 04:50:13', '2020-10-01 04:50:13'),
(12, 1, 12, 120000, '-', '2020-10-06 05:43:31', '2020-10-06 05:43:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `fullname` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `pin` int(11) DEFAULT NULL,
  `balance` double NOT NULL DEFAULT 0,
  `verify` tinyint(1) NOT NULL DEFAULT 0,
  `phone` varchar(20) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `role` int(1) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `fullname`, `email`, `password`, `pin`, `balance`, `verify`, `phone`, `photo`, `role`, `created_at`, `updated_at`) VALUES
(7, 'air', 'air', 'air@email.com', '$2b$10$PqBcu5iiICKWi7jvRvKBXe0fDu1ohOedR8OI1alybH3FtFi47Wium', 123456, 10000000, 0, '08123456789', '', 2, '2020-09-28 14:02:49', '2020-09-28 14:02:49'),
(8, 'bintang', 'bintang', 'bintang@email.com', '$2b$10$lxy7WPyvWZLtH3UVwWTMd.pOmxCMNKMXIq.Iuoz3GhLFJBW02VWU.', 123456, 10000000, 0, '08123456789', '', 1, '2020-09-28 14:03:26', '2020-09-28 14:03:26'),
(9, 'bulan', 'bulan', 'bulan@email.com', '$2b$10$vlnPEISt3ZZAcRfcKaF55O0grv3nJvBPNg54hQOJRv7Jb5oaozuci', 123456, 10000000, 0, '08123456789', '', 2, '2020-09-28 14:07:28', '2020-09-28 14:07:28'),
(10, 'ocean', 'ocean', 'ocean@email.com', '$2b$10$5q5oKmCfmOoPdgNYvPdrieVXTxVEfP9iJ7QD/sHA4Ma9hniYZ8KKq', 123456, 10000000, 0, '08123456789', '', 1, '2020-09-28 14:47:20', '2020-09-28 14:47:20'),
(24, 'langitBiru', 'langit biru', 'user@mail.com', '$2b$10$Fo4edcQbPV1b26i0TpPofO81XSqJS0/m46rIBoZwrSEuhnJz3WFVW', NULL, 0, 0, '08123456789', '', 2, '2020-10-07 15:44:29', '2020-10-07 15:44:29'),
(25, 'admin_', 'admin', 'admin@mail.com', '$2b$10$YFiBSAjXYdW2bY9AsgbXEekfoOhVpjxG4.lhjB6Bq1eILHW16tGfW', NULL, 0, 0, '08123456666', '', 1, '2020-10-07 16:47:51', '2020-10-07 16:47:51'),
(26, 'user_', 'user', 'user@gmail.com', '$2b$10$UA9ZEBaTzrdsNFuAKcdjUee9NC.0wOYdeOKu.WzGV0AoGXkvSMBcu', NULL, 0, 0, '08987654321', '', 2, '2020-10-07 16:52:03', '2020-10-07 16:52:03');

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
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
