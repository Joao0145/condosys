-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS condominio;

-- Seleção do banco de dados
USE condominio;

-- Criação da tabela de moradores
CREATE TABLE IF NOT EXISTS moradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    idade INT NOT NULL,
    apartamento VARCHAR(10) NOT NULL,
    animais INT NOT NULL,
    garagem INT NOT NULL
);

-- Inserção de dados exemplo (opcional)
INSERT INTO moradores (nome, data_nascimento, idade, apartamento, animais, garagem) 
VALUES ('João Silva', '1985-04-12', 39, '101', 2, 1);
