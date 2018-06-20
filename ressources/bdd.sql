{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf400
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw8400\paperh11900\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 -- phpMyAdmin SQL Dump\
-- version 4.7.3\
-- https://www.phpmyadmin.net/\
--\
-- H\'f4te : localhost:8889\
-- G\'e9n\'e9r\'e9 le :  mer. 20 juin 2018 \'e0 11:55\
-- Version du serveur :  5.6.35\
-- Version de PHP :  7.1.8\
\
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";\
SET time_zone = "+00:00";\
\
--\
-- Base de donn\'e9es :  `race`\
--\
\
-- --------------------------------------------------------\
\
--\
-- Structure de la table `commentary`\
--\
\
CREATE TABLE `commentary` (\
  `text_commentary` varchar(255) COLLATE utf8_bin NOT NULL,\
  `date_commentary` date NOT NULL,\
  `id_user` int(11) NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\
\
-- --------------------------------------------------------\
\
--\
-- Structure de la table `favorite_user`\
--\
\
CREATE TABLE `favorite_user` (\
  `id_user` int(11) NOT NULL,\
  `id_film` int(11) NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\
\
-- --------------------------------------------------------\
\
--\
-- Structure de la table `film`\
--\
\
CREATE TABLE `film` (\
  `id` int(11) NOT NULL,\
  `note_film` int(11) NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\
\
-- --------------------------------------------------------\
\
--\
-- Structure de la table `notation`\
--\
\
CREATE TABLE `notation` (\
  `id_user` int(11) NOT NULL,\
  `id_film` int(11) NOT NULL,\
  `note_film` int(11) NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\
\
-- --------------------------------------------------------\
\
--\
-- Structure de la table `user`\
--\
\
CREATE TABLE `user` (\
  `email` int(11) NOT NULL,\
  `mdp` varchar(45) COLLATE utf8_bin NOT NULL,\
  `id_user` int(11) NOT NULL,\
  `firstname_user` varchar(50) COLLATE utf8_bin NOT NULL,\
  `lastname_user` varchar(50) COLLATE utf8_bin NOT NULL\
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;\
\
--\
-- Index pour les tables d\'e9charg\'e9es\
--\
\
--\
-- Index pour la table `film`\
--\
ALTER TABLE `film`\
  ADD PRIMARY KEY (`id`);\
\
--\
-- Index pour la table `user`\
--\
ALTER TABLE `user`\
  ADD PRIMARY KEY (`id_user`);\
\
--\
-- AUTO_INCREMENT pour les tables d\'e9charg\'e9es\
--\
\
--\
-- AUTO_INCREMENT pour la table `film`\
--\
ALTER TABLE `film`\
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;\
--\
-- AUTO_INCREMENT pour la table `user`\
--\
ALTER TABLE `user`\
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;}