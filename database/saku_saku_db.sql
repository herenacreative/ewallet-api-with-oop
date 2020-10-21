-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 21, 2020 at 04:05 AM
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
(5, 1, 'Go to the nearest ATM or you can use E-Banking.', '2020-09-30 15:14:02', '2020-09-30 15:14:02'),
(6, 2, 'Type your security number on the ATM or E-Banking.', '2020-09-30 15:14:32', '2020-09-30 15:14:32'),
(7, 3, 'Select “Transfer” in the menu', '2020-09-30 15:15:06', '2020-09-30 15:15:06'),
(8, 4, 'Type the virtual account number that we provide you at the top.', '2020-09-30 15:15:38', '2020-09-30 15:15:38'),
(9, 5, 'Type the amount of the money you want to top up.', '2020-09-30 15:16:18', '2020-09-30 15:16:18');

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
(19, 49, 50, 10000, 'sedekah', '2020-10-12 16:49:34', '2020-10-12 16:49:34'),
(20, 49, 51, 200000, 'transfer', '2020-10-12 16:51:16', '2020-10-12 16:51:16'),
(21, 51, 52, 200000, 'transfer', '2020-10-12 16:51:40', '2020-10-12 16:51:40'),
(22, 60, 58, 100000, 'transfer', '2020-10-12 16:57:56', '2020-10-12 16:57:56'),
(23, 62, 51, 100000, 'transfer', '2020-10-12 16:58:17', '2020-10-12 16:58:17'),
(24, 62, 65, 100000, '-', '2020-10-12 16:58:30', '2020-10-12 16:58:30'),
(25, 54, 55, 100000, 'transfer', '2020-10-12 16:58:42', '2020-10-12 16:58:42'),
(27, 56, 57, 100000, 'transfer', '2020-10-12 16:59:17', '2020-10-12 16:59:17'),
(28, 57, 58, 150000, 'transfer', '2020-10-12 16:59:26', '2020-10-12 16:59:26'),
(29, 58, 59, 150000, 'transfer', '2020-10-12 16:59:34', '2020-10-12 16:59:34'),
(30, 60, 61, 150000, 'transfer', '2020-10-12 16:59:43', '2020-10-12 16:59:43'),
(31, 61, 62, 150000, 'transfer', '2020-10-12 16:59:49', '2020-10-12 16:59:49'),
(32, 51, 62, 150000, 'transfer', '2020-10-12 16:59:55', '2020-10-12 16:59:55'),
(33, 60, 51, 150000, 'transfer', '2020-10-12 17:00:03', '2020-10-12 17:00:03'),
(34, 72, 51, 150000, 'transfer', '2020-10-12 17:00:15', '2020-10-12 17:00:15'),
(35, 68, 51, 150000, 'transfer', '2020-10-12 17:00:24', '2020-10-12 17:00:24'),
(36, 68, 51, 150000, 'transfer', '2020-10-13 07:41:01', '2020-10-13 07:41:01'),
(37, 76, 51, 1500000, 'transfer buat belanja', '2020-10-14 09:06:21', '2020-10-14 09:06:21'),
(38, 50, 51, 1500000, 'transfer buat belanja', '2020-10-14 09:06:39', '2020-10-14 09:06:39'),
(39, 76, 51, 1500000, 'transfer buat belanja', '2020-10-14 09:07:22', '2020-10-14 09:07:22'),
(40, 51, 76, 1500000, 'transfer aja', '2020-10-14 09:07:56', '2020-10-14 09:07:56'),
(41, 76, 66, 1500000, 'transfer aja', '2020-10-14 09:21:49', '2020-10-14 09:21:49'),
(42, 77, 51, 1500000, 'transfer buat kamu', '2020-10-15 02:31:40', '2020-10-15 02:31:40'),
(43, 72, 77, 1500000, 'transfer ', '2020-10-15 02:34:34', '2020-10-15 02:34:34'),
(44, 78, 50, 1500000, 'transfer ', '2020-10-15 03:17:48', '2020-10-15 03:17:48'),
(45, 49, 63, 1233333, 'belanja', '2020-10-19 14:24:56', '2020-10-19 14:24:56'),
(46, 52, 57, 120000, 'bayar pulsa', '2020-10-19 14:36:13', '2020-10-19 14:36:13'),
(47, 52, 58, 12000, 'beli pulsa', '2020-10-19 14:51:01', '2020-10-19 14:51:01'),
(48, 52, 57, 12333, 'asa', '2020-10-19 16:42:14', '2020-10-19 16:42:14'),
(49, 52, 56, 40000, 'ha', '2020-10-19 16:56:53', '2020-10-19 16:56:53'),
(50, 52, 56, 40000, 'ha', '2020-10-19 16:58:24', '2020-10-19 16:58:24'),
(51, 52, 56, 40000, 'ha', '2020-10-19 16:59:44', '2020-10-19 16:59:44'),
(52, 52, 56, 90, '90', '2020-10-19 17:01:44', '2020-10-19 17:01:44'),
(53, 52, 56, 90, '90', '2020-10-19 17:01:44', '2020-10-19 17:01:44'),
(54, 52, 56, 90, '90', '2020-10-19 17:01:45', '2020-10-19 17:01:45'),
(55, 52, 56, 12, 'as', '2020-10-19 17:02:53', '2020-10-19 17:02:53'),
(56, 75, 56, 12000, 'kj', '2020-10-19 23:04:08', '2020-10-19 23:04:08'),
(57, 75, 56, 12000, 'kj', '2020-10-19 23:04:33', '2020-10-19 23:04:33'),
(58, 75, 56, 12000, 'az', '2020-10-19 23:08:50', '2020-10-19 23:08:50'),
(59, 75, 56, 12000, 'az', '2020-10-19 23:09:05', '2020-10-19 23:09:05'),
(60, 75, 64, 1233, 'aggg', '2020-10-19 23:11:20', '2020-10-19 23:11:20'),
(61, 75, 55, 12000, 'ass', '2020-10-19 23:17:56', '2020-10-19 23:17:56'),
(62, 75, 56, 12333, 'as', '2020-10-19 23:20:47', '2020-10-19 23:20:47'),
(63, 75, 66, 6666, 'aaaa', '2020-10-19 23:22:35', '2020-10-19 23:22:35'),
(64, 75, 63, 123, 'aaa', '2020-10-19 23:23:09', '2020-10-19 23:23:09'),
(65, 75, 65, 444, 'as', '2020-10-19 23:24:30', '2020-10-19 23:24:30'),
(66, 75, 65, 1233, 'as', '2020-10-19 23:26:00', '2020-10-19 23:26:00'),
(67, 75, 65, 1233, 'as', '2020-10-19 23:26:03', '2020-10-19 23:26:03'),
(68, 75, 65, 1233, 'as', '2020-10-19 23:30:30', '2020-10-19 23:30:30'),
(69, 75, 65, 123, 'asdad', '2020-10-19 23:31:23', '2020-10-19 23:31:23'),
(70, 75, 65, 123, 'asdad', '2020-10-19 23:31:37', '2020-10-19 23:31:37'),
(71, 75, 65, 123, 'asdad', '2020-10-19 23:31:50', '2020-10-19 23:31:50'),
(72, 73, 58, 1200, '12222', '2020-10-19 23:34:59', '2020-10-19 23:34:59'),
(73, 73, 58, 1200, '12222', '2020-10-19 23:35:11', '2020-10-19 23:35:11'),
(74, 73, 58, 1200, '12222', '2020-10-19 23:35:17', '2020-10-19 23:35:17'),
(75, 73, 58, 1200, '12222', '2020-10-19 23:35:23', '2020-10-19 23:35:23'),
(76, 73, 57, 1233, 'as', '2020-10-19 23:35:59', '2020-10-19 23:35:59'),
(77, 73, 57, 1233, 'as', '2020-10-19 23:36:11', '2020-10-19 23:36:11'),
(78, 73, 66, 1222, 'asass', '2020-10-19 23:40:48', '2020-10-19 23:40:48'),
(79, 73, 66, 1222, 'asass', '2020-10-19 23:41:01', '2020-10-19 23:41:01'),
(80, 73, 66, 12323, '1212', '2020-10-20 01:02:51', '2020-10-20 01:02:51'),
(81, 63, 56, 12000, 'ddss', '2020-10-20 01:38:21', '2020-10-20 01:38:21'),
(82, 63, 57, 1200001, '2', '2020-10-20 02:00:42', '2020-10-20 02:00:42'),
(83, 70, 49, 0, '-', '2020-10-20 05:09:13', '2020-10-20 05:09:13'),
(84, 70, 49, 0, '-', '2020-10-20 05:14:43', '2020-10-20 05:14:43'),
(85, 70, 49, 123213, '12', '2020-10-20 05:15:54', '2020-10-20 05:15:54'),
(86, 70, 49, 0, '-', '2020-10-20 05:19:23', '2020-10-20 05:19:23'),
(87, 70, 49, 0, '-', '2020-10-20 05:20:06', '2020-10-20 05:20:06'),
(88, 70, 49, 123323, '1', '2020-10-20 05:20:40', '2020-10-20 05:20:40'),
(89, 70, 49, 123, '12', '2020-10-20 05:22:13', '2020-10-20 05:22:13'),
(90, 70, 49, 123, '12', '2020-10-20 05:22:24', '2020-10-20 05:22:24'),
(91, 70, 49, 12, '1', '2020-10-20 05:23:31', '2020-10-20 05:23:31'),
(92, 70, 49, 12, '1', '2020-10-20 05:23:39', '2020-10-20 05:23:39'),
(93, 70, 49, 12, '12', '2020-10-20 05:24:34', '2020-10-20 05:24:34'),
(94, 70, 49, 222, '22', '2020-10-20 05:25:02', '2020-10-20 05:25:02'),
(95, 70, 49, 1231, '121', '2020-10-20 05:46:17', '2020-10-20 05:46:17'),
(96, 70, 49, 12000, '12', '2020-10-20 05:48:04', '2020-10-20 05:48:04'),
(97, 54, 63, 12322, 'text', '2020-10-20 05:50:12', '2020-10-20 05:50:12'),
(98, 54, 63, 123, '3132', '2020-10-20 05:51:26', '2020-10-20 05:51:26'),
(99, 54, 59, 12222, '12', '2020-10-20 05:54:49', '2020-10-20 05:54:49'),
(100, 54, 59, 123, '12', '2020-10-20 05:58:28', '2020-10-20 05:58:28'),
(101, 54, 59, 0, '-', '2020-10-20 06:01:13', '2020-10-20 06:01:13'),
(102, 54, 64, 1234, '12', '2020-10-20 06:02:53', '2020-10-20 06:02:53'),
(103, 54, 65, 1212, '12', '2020-10-20 06:04:30', '2020-10-20 06:04:30');

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
  `balance` double NOT NULL,
  `verify` tinyint(1) NOT NULL,
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
(49, 'verell_', 'Verell b', 'verell@mail.com', '$2b$10$VR4qCTJfRmdtK0oNakYebOhHF4rVG4rGztLm.eiacA2RMJGQXLDmC', 123456, 1000000, 1, '081111999999', '2020-10-14T04:11:30.937Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-12 15:58:26', '2020-10-21 00:41:29'),
(50, 'user_', 'User', 'user@mail.com', '$2b$10$CirmeMpB6453giGx0PUYCOsAMKb.GccY/cH8iSi1OYD0DcSnpe6Xu', 123456, 1000000, 1, '082222222222', '2020-10-12T16:01:02.481Zphoto-1593642532400-2682810df593.jpeg', 2, '2020-10-12 16:01:02', '2020-10-12 16:01:02'),
(51, 'herena_sb', 'Sinta Herena', 'sintaherena@mail.com', '$2b$10$s1cWyHPbGKoT6H1KAavgGehvkr6WIL/21xqwr4M4PalezG1QHY9WS', 123456, 2000000, 1, '082222222222', '2020-10-12T17:32:12.619Zphoto-1602416994306-77246a12d3c8.jpeg', 1, '2020-10-12 16:02:56', '2020-10-12 16:02:56'),
(52, 'bella_', 'Bella', 'bella@mail.com', '$2b$10$e3wPCH69lveTTmO6zp.h.OxvyVx/gInp2s7598oG4AMJThOdCsJfy', 123456, 1000000, 1, '083333333333', '2020-10-12T17:31:54.444Zphoto-1602416994306-77246a12d3c8.jpeg', 2, '2020-10-12 16:03:48', '2020-10-12 16:03:48'),
(53, 'tova_', 'Tofa Maulana', 'tovamaulana@mail.com', '$2b$10$LUHznQOvEme.MazUxlr0CePDYoyjJit3HKzMpcp2Geb94o/.ksfG6', 123456, 1000000, 1, '083333333333', '2020-10-12T16:04:39.298Zb88e6a2de5620d580e6399a7105212a3.jpg', 2, '2020-10-12 16:04:39', '2020-10-12 16:04:39'),
(54, 'wina_', 'winas salsabila', 'wina@mail.com', '$2b$10$gfcJq1K2il7ww38pttLOguIXTIFr6YRAZ6WDK3Ho6KB4bA1BuznS6', 654321, 1000000, 1, '08123232312', '2020-10-20T07:00:35.276Zphoto-1602324943764-f7040db77fc8.jpeg', 2, '2020-10-12 16:05:34', '2020-10-20 07:14:21'),
(55, 'ayu_', 'Ayu Armadani Putri', 'ayu@mail.com', '$2b$10$UcqRZ7sK7uroDsAv4EiQw.yIUgKphiQLwNsit2uRYbvGP/aewrZ0i', 123456, 100000, 1, '08444444444', '2020-10-12T17:31:07.399Zphoto-1573089028645-9c7e16d1a3a0.jpeg', 3, '2020-10-12 16:06:26', '2020-10-12 16:06:26'),
(56, 'api_', 'Api Alrahman', 'api@mail.com', '$2b$10$2Q9rL8FYGqc.1hDao9/Uo.k7sspE.KppUN87aVigWmPhu2ZWVXZmG', 123456, 1000000, 1, '0855555555', '2020-10-12T16:07:51.233Zphoto-1602324943764-f7040db77fc8.jpeg', 3, '2020-10-12 16:07:51', '2020-10-12 16:07:51'),
(57, 'arungi_', 'Arungi Cahaya', 'arungi@mail.com', '$2b$10$vIk41BvdXIoR3DpWO.wPMODL8LivEY1S9CwFVPaSm3KS9YsJhxJuu', 123456, 1000000, 1, '0866666666', '2020-10-12T16:08:58.726Zphoto-1602492647042-c809e34cd8f2.jpeg', 3, '2020-10-12 16:08:58', '2020-10-12 16:08:58'),
(58, 'diki_', 'Diki Herliansyah', 'diki@mail.com', '$2b$10$StDrL3WWzTOBlTc5UsoAM.v1pC0/xCHrfJx.UpL5FuXTStMTN5wSu', 123456, 1250000, 1, '0877777777', '2020-10-12T16:10:04.936Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-12 16:10:05', '2020-10-12 16:10:05'),
(59, 'drajat_', 'Drajat Fikri', 'drajat@mail.com', '$2b$10$3//EaabqalAeVmKPkBwenu1FrPJx.SQgSsLCZFEbLULQmggI1W0Qa', 123456, 1000000, 1, '0888888888', '2020-10-12T16:10:53.813Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-12 16:10:53', '2020-10-12 16:10:53'),
(60, 'rani_', 'Rani Suprianti', 'rani@mail.com', '$2b$10$TsqsMULz3X.4eb0tpYUK3.jCpFBrDA7UcTA4qY.NWhN8T1kpubEuu', 123456, 1000000, 1, '0888888888', '2020-10-12T16:11:54.701Zphoto-1580429372942-6a98fdcdeab6.jpeg', 3, '2020-10-12 16:11:54', '2020-10-12 16:11:54'),
(61, 'rifqi_', 'Rifqi Malik Iskandar', 'rifqi@mail.com', '$2b$10$hQzX/myTRylVGH9Jlo2.e.wz4sA4pPKkqDSsA/89vcjC5cUQAkjuy', 123456, 1000000, 1, '0888888888', '2020-10-12T16:12:50.542Zphoto-1593642532009-6ba71e22f468.jpeg', 3, '2020-10-12 16:12:50', '2020-10-12 16:12:50'),
(62, 'rizky_', 'Rizky Agung Pratama', 'rizky@mail.com', '$2b$10$G8.PypzFIunMKOXF5PREh.269UNIykHOkwHSrEOc1/pR/3E7eKTDS', 123456, 1000000, 1, '08999999999', '2020-10-12T16:13:44.563Zphoto-1586844381867-339556895b97.jpeg', 3, '2020-10-12 16:13:44', '2020-10-12 16:13:44'),
(63, 'ahmad_', 'Ahmad Maulana', 'ahmad@mail.com', '$2b$10$LU6EqR/aR75o3tmOCmrLx.Pn0vYNkca6dr38Zk/MuEdfStKMTo7ee', 123456, 1000000, 1, '0800000000000', '2020-10-12T16:14:40.708Zphoto-1602139577422-b52758468c4c.jpeg', 3, '2020-10-12 16:14:40', '2020-10-12 16:14:40'),
(64, 'deny_', 'Denny Wahyudi', 'denny@mail.com', '$2b$10$L5/sqqA5DPANbU0liQ9EjeTi3PO3c6PaqZ51t3ywgl8BH.sFa2h82', 123456, 1000000, 1, '0811112222222', '2020-10-12T16:16:01.696Zphoto-1602432058111-9ee74ac7b683.jpeg', 3, '2020-10-12 16:16:01', '2020-10-12 16:16:01'),
(65, 'dyaksa_', 'Dyaksa', 'dyaksa@mail.com', '$2b$10$iEtI4w7Srf91vJSCv/1WAOeY5EBIjYGXU9et1k9pw0..PEk3ya8Ka', 123456, 1000000, 1, '081111333333', '2020-10-12T16:16:44.463Zphoto-1602432058111-9ee74ac7b683.jpeg', 3, '2020-10-12 16:16:44', '2020-10-12 16:16:44'),
(66, 'hanif_', 'hanif', 'hanif@mail.com', '$2b$10$1MeqTY/lvsZ5xvpoGaG07.xhgvQKgSRQ.9NruzJu7/gfpXq3X3vky', 123456, 1000000, 1, '081111444444', '2020-10-12T16:17:51.882Zphoto-1602139577422-b52758468c4c.jpeg', 3, '2020-10-12 16:17:51', '2020-10-12 16:17:51'),
(67, 'ihsan_', 'Ihsan Ansory', 'ihsan@mail.com', '$2b$10$AGFEUU2UnR/.pwQijRCppOQjSmEukTvx4pBMxf/seDgG075ivbuum', 123456, 1000000, 1, '081111555555', '2020-10-12T16:18:48.206Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-12 16:18:48', '2020-10-12 16:18:48'),
(68, 'lailli_', 'Lailli Kumala', 'lailli@mail.com', '$2b$10$7dGDB7ANJF2bwlFWDr/nXu93sJE/NMGpI8QBNOsZra1ZXMXhjQ7tG', 123456, 1000000, 1, '081111666666', '2020-10-12T16:19:33.034Zphoto-1580429372942-6a98fdcdeab6.jpeg', 3, '2020-10-12 16:19:33', '2020-10-12 16:19:33'),
(69, 'khairul_', 'Muhammad Khairul', 'mkhairul@mail.com', '$2b$10$bdGwdakzz4HVK1R7cv1CJ.zb1V8Py9N3OBnXR1PMmsaeZeCf74YQq', 123456, 1000000, 1, '081111777777', '2020-10-12T16:20:42.654Zphoto-1586844381867-339556895b97.jpeg', 3, '2020-10-12 16:20:42', '2020-10-12 16:20:42'),
(70, 'ridwan_', 'Muhammad Ridwan', 'mridwan@mail.com', '$2b$10$XUFSu0rsnyPWQPYwhCLeB.sM4kDyMfDxMF1WTFVw6/BQe/lGDJPpC', 123456, 120000, 1, '0811118888888', '2020-10-12T17:32:22.544Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-12 16:21:22', '2020-10-12 16:21:22'),
(71, 'said_', 'Said Hamzah', 'said@mail.com', '$2b$10$BvPH6tw8IEg.H8mXIHD3sOAfvCJkTYKSVVH44lM.MyVNT7z.74eoC', 123456, 1000000, 1, '081111999999', '2020-10-12T16:22:02.799Zphoto-1602492647042-c809e34cd8f2.jpeg', 3, '2020-10-12 16:22:02', '2020-10-12 16:22:02'),
(73, 'ocean', 'ocean cean', 'ocean@mail.com', '$2b$10$MRGbYPbEa6sYxDtCAIvVa./54GQDJlsJrKluzHEoA.FNnES8YAWN6', 444444, 0, 1, '8123133', '', 3, '2020-10-13 00:09:42', '2020-10-18 14:08:55'),
(74, 'test', 'Verrel b', 'test@mail.com', '$2b$10$1.tT4MEzkO4Bb956QJJpo.TbqBCx0BVt0DGNzXf6Dyin1xP2pAqIO', 123456, 1000000, 1, '081111999999', '2020-10-14T04:11:30.937Zphoto-1602433834444-3cdb6eed5cfc.jpeg', 3, '2020-10-13 03:23:53', '2020-10-14 09:22:36'),
(75, 'langit', 'langit biru', 'langit@mail.com', '$2b$10$eOCyMvc7KCOelZB3Z4Nxn.vN0MyMXnZM9aJm8m2qb/04UXWpLw71W', 123456, 1000000, 1, '0811110000000', '2020-10-21T01:50:12.162Zphoto-1602432058111-9ee74ac7b683.jpeg', 3, '2020-10-13 07:35:27', '2020-10-21 01:52:36'),
(78, 'kaka_', 'kaka', 'kaka@mail.com', '$2b$10$50Y1FtX4fwnmZkAR8/NSc.7SbbPHrCsj.dh..kfvQzyC/LgUru3Oe', 0, 1000000, 0, '0811110000000', '2020-10-15T03:14:39.214Zphoto-1602432058111-9ee74ac7b683.jpeg', 3, '2020-10-15 03:14:39', '2020-10-15 03:14:39'),
(79, 'kim_', '-', 'kim@mail.com', '$2b$10$eX6039zaeIjOtswZAHtJGeoE9e0jwjOb4Cqix74el.j7cnOmhE3Aq', 123456, 0, 1, '-', '-', 3, '2020-10-20 02:43:52', '2020-10-20 02:44:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `top_up`
--
ALTER TABLE `top_up`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `transfer`
--
ALTER TABLE `transfer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
