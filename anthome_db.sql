-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: db
-- Thời gian đã tạo: Th3 14, 2023 lúc 12:13 PM
-- Phiên bản máy phục vụ: 8.0.32
-- Phiên bản PHP: 8.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `anthome_db`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `brands`
--

CREATE TABLE `brands` (
  `id_brand` int NOT NULL,
  `name_brand` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `brands`
--

INSERT INTO `brands` (`id_brand`, `name_brand`, `createdAt`, `updatedAt`) VALUES
(1, 'test 1', '2023-03-14 10:56:17', '2023-03-14 10:56:17'),
(2, 'test 2', '2023-03-14 10:56:17', '2023-03-14 10:56:17'),
(3, 'test 1', '2023-03-14 10:56:17', '2023-03-14 10:56:17'),
(4, 'test 2', '2023-03-14 10:56:17', '2023-03-14 10:56:17');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id_category` int NOT NULL,
  `name_category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_child` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category_child`
--

CREATE TABLE `category_child` (
  `id_category_child` int NOT NULL,
  `name_category_child` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `color_product`
--

CREATE TABLE `color_product` (
  `id_color` int NOT NULL,
  `name_color` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `hex_color` varchar(7) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `color_product`
--

INSERT INTO `color_product` (`id_color`, `name_color`, `hex_color`, `createdAt`, `updatedAt`) VALUES
(1, 'Đỏ', '#777777', '2023-03-14 11:15:30', '2023-03-14 11:15:30'),
(2, 'Đen', '#000', '2023-03-14 11:18:08', '2023-03-14 11:18:08');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `detail_product`
--

CREATE TABLE `detail_product` (
  `id_detail_main` int NOT NULL,
  `detail_prod` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description_prod` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `specification_prod` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `preserve_prod` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `detail_product`
--

INSERT INTO `detail_product` (`id_detail_main`, `detail_prod`, `description_prod`, `specification_prod`, `preserve_prod`, `createdAt`, `updateAt`) VALUES
(1, 'Thông tin sản phẩm', 'Chi tiết sản phẩm', 'Thông số sản phẩm', 'Bảo hành sản phẩm', '2023-03-14 11:18:38', '2023-03-14 11:18:38'),
(2, '', '', '', '', '2023-03-14 11:18:38', '2023-03-14 11:18:38');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `img_product`
--

CREATE TABLE `img_product` (
  `id_images` int NOT NULL,
  `img_1` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_2` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_3` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img_4` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `img_product`
--

INSERT INTO `img_product` (`id_images`, `img_1`, `img_2`, `img_3`, `img_4`, `createdAt`, `updatedAt`) VALUES
(1, 'Hình ảnh 1', 'Hình ảnh 2', '', '', '2023-03-14 11:21:42', '2023-03-14 11:21:42');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `material_product`
--

CREATE TABLE `material_product` (
  `id_material` int NOT NULL,
  `name_material` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `material_product`
--

INSERT INTO `material_product` (`id_material`, `name_material`, `createdAt`, `updatedAt`) VALUES
(1, 'Chất liệu 1', '2023-03-14 11:21:01', '2023-03-14 11:21:01'),
(2, 'Chất liệu 2', '2023-03-14 11:21:01', '2023-03-14 11:21:01');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id_product` int NOT NULL,
  `name_prod` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cate_prod` int NOT NULL,
  `cate_child_prod` int DEFAULT NULL,
  `brand_prod` int NOT NULL,
  `id_detail_prod` int NOT NULL,
  `price_prod` decimal(10,0) NOT NULL,
  `color_prod` int NOT NULL,
  `material_prod` int NOT NULL,
  `img_prod` int NOT NULL,
  `style_prod` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `style_product`
--

CREATE TABLE `style_product` (
  `id_style` int NOT NULL,
  `name_style` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `style_product`
--

INSERT INTO `style_product` (`id_style`, `name_style`, `createdAt`, `updatedAt`) VALUES
(1, 'Phong cách 1', '2023-03-14 11:21:19', '2023-03-14 11:21:19'),
(2, 'Phong cách 2', '2023-03-14 11:21:19', '2023-03-14 11:21:19');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`),
  ADD UNIQUE KEY `category_child_2` (`category_child`);

--
-- Chỉ mục cho bảng `category_child`
--
ALTER TABLE `category_child`
  ADD PRIMARY KEY (`id_category_child`);

--
-- Chỉ mục cho bảng `color_product`
--
ALTER TABLE `color_product`
  ADD PRIMARY KEY (`id_color`);

--
-- Chỉ mục cho bảng `detail_product`
--
ALTER TABLE `detail_product`
  ADD PRIMARY KEY (`id_detail_main`);

--
-- Chỉ mục cho bảng `img_product`
--
ALTER TABLE `img_product`
  ADD PRIMARY KEY (`id_images`);

--
-- Chỉ mục cho bảng `material_product`
--
ALTER TABLE `material_product`
  ADD PRIMARY KEY (`id_material`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `brand_prod` (`brand_prod`),
  ADD KEY `id_detail_prod` (`id_detail_prod`),
  ADD KEY `material_prod` (`material_prod`),
  ADD KEY `color_prod` (`color_prod`),
  ADD KEY `img_prod` (`img_prod`),
  ADD KEY `style_prod` (`style_prod`);

--
-- Chỉ mục cho bảng `style_product`
--
ALTER TABLE `style_product`
  ADD PRIMARY KEY (`id_style`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `category_child`
--
ALTER TABLE `category_child`
  MODIFY `id_category_child` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `color_product`
--
ALTER TABLE `color_product`
  MODIFY `id_color` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `detail_product`
--
ALTER TABLE `detail_product`
  MODIFY `id_detail_main` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `img_product`
--
ALTER TABLE `img_product`
  MODIFY `id_images` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `material_product`
--
ALTER TABLE `material_product`
  MODIFY `id_material` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT cho bảng `style_product`
--
ALTER TABLE `style_product`
  MODIFY `id_style` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `category`
--

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`brand_prod`) REFERENCES `brands` (`id_brand`),
  ADD CONSTRAINT `products_ibfk_4` FOREIGN KEY (`id_detail_prod`) REFERENCES `detail_product` (`id_detail_main`),
  ADD CONSTRAINT `products_ibfk_5` FOREIGN KEY (`material_prod`) REFERENCES `material_product` (`id_material`),
  ADD CONSTRAINT `products_ibfk_6` FOREIGN KEY (`color_prod`) REFERENCES `color_product` (`id_color`),
  ADD CONSTRAINT `products_ibfk_7` FOREIGN KEY (`img_prod`) REFERENCES `img_product` (`id_images`),
  ADD CONSTRAINT `products_ibfk_8` FOREIGN KEY (`style_prod`) REFERENCES `style_product` (`id_style`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
