-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 15, 2020 at 10:31 AM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_w2_part4`
--

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`id`, `name`, `phone`, `email`, `address`) VALUES
(1, 'Pavel Brushneen', 31617036, 'pbrushneen6@techcrunch.com', 'Allirød'),
(2, 'Hedy Gerault', 176179, 'hgerault7@nymag.com', 'Nirum'),
(3, 'çŽ‹ç§€è‹±', 852674, 'wang.xiuying@weebly.com', 'Lyngby'),
(4, 'Ø¥Ù„ÙŠØ§Ø³', 202898, 'elias@github.com', NULL),
(5, 'Donald Duck', NULL, 'donald@duck.com', 'Copenhagen');

-- --------------------------------------------------------

--
-- Table structure for table `customer_resturant`
--

CREATE TABLE `customer_resturant` (
  `resturant_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer_resturant`
--

INSERT INTO `customer_resturant` (`resturant_id`, `customer_id`) VALUES
(4, 1),
(2, 2),
(4, 3),
(4, 5),
(3, 3),
(2, 1),
(1, 3),
(3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `resturant_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`id`, `name`, `email`, `address`, `phone`, `resturant_id`) VALUES
(1, 'Aarika Ellingworth', 'aellingworth0@harvard.edu', 'Damass', 483396, 3),
(2, 'Pren Goldsworthy', 'pgoldsworthy1@spotify.com', 'HIllerød', 6358467, 4),
(3, 'Pablo Kisbee', 'pkisbee2@lulu.com', 'Copenhagen', 3790962, 1),
(4, 'Rodie Duncan', 'rduncan3@quantcast.com', 'Valby', 2463743, 2),
(5, 'Aubry Polak', 'apolak4@indiatimes.com', 'Virum', 302678, 2),
(6, 'Maryrose Meadows', 'mmeadows5@comcast.net', 'Horsholm', 2512465, 1);

-- --------------------------------------------------------

--
-- Table structure for table `resturant`
--

CREATE TABLE `resturant` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `phone` int(11) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `resturant`
--

INSERT INTO `resturant` (`id`, `name`, `phone`, `email`, `address`) VALUES
(1, 'Karakala', 654336, 'karakala@harvard.kar', 'Allerød'),
(2, 'Axer', 8643225, 'axtaja@axer.com', 'HIllerød'),
(3, 'Macdonald', 776555, 'macfood@mac.com', 'Copenhagen'),
(4, 'Testy', 298763, 'testy@testy.com', 'Virum');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_resturant`
--
ALTER TABLE `customer_resturant`
  ADD KEY `resturant_id` (`resturant_id`),
  ADD KEY `customer_id` (`customer_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `resturant_id` (`resturant_id`);

--
-- Indexes for table `resturant`
--
ALTER TABLE `resturant`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_resturant`
--
ALTER TABLE `customer_resturant`
  ADD CONSTRAINT `customer_resturant_ibfk_1` FOREIGN KEY (`resturant_id`) REFERENCES `resturant` (`id`),
  ADD CONSTRAINT `customer_resturant_ibfk_2` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`id`);

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `employee_ibfk_1` FOREIGN KEY (`resturant_id`) REFERENCES `resturant` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
