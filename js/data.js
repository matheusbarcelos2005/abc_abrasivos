// Catálogo automático extraído do PDF
const produtos = [
    // RODAS PGS
    { id: 1, nome: "Rodas PGS 25x150x45 - grãos 36 a 280", preco: 40.00, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 2, nome: "Rodas PGS 25x150x45 - grãos 320 a 800", preco: 45.00, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 3, nome: "Rodas PGS 50x150x45 - qualquer grão", preco: 65.00, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 4, nome: "Rodas PGS 25x250x85 - qualquer grão", preco: 105.00, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 5, nome: "Roda PGS 50x250x85 - qualquer grão", preco: 180.00, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 6, nome: "Rodas PGS 30x150x25", preco: 52.50, categoria: "Rodas PGS", imagem: "assets/images/Rodas PGS 25x150x45.jpeg.png" },
    { id: 7, nome: "Roda PG com Rosca M14 115x20mm", preco: 52.50, categoria: "Rodas PGS", imagem: "assets/images/pg misto.jpeg.png" },
    { id: 8, nome: "Roda PG Mista Berwanger 100x50xM14", preco: 52.50, categoria: "Rodas PGS", imagem: "assets/images/pg misto.jpeg.png" },
    { id: 9, nome: "Roda PG Mista Berwanger 115x20xM14", preco: 40.00, categoria: "Rodas PGS", imagem: "assets/images/pg misto.jpeg.png" },

    // DISCOS
    { id: 10, nome: "Disco de Corte Berwanger 115x22,2mm", preco: 3.00, categoria: "Discos", imagem: "assets/images/disco de corte.jpeg.png" },
    { id: 11, nome: "Disco Esponja Acabamento Berwanger", preco: 25.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 12, nome: "Disco Feltro Berwanger 115x22mm", preco: 25.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 13, nome: "Disco Removedor Berwanger 115x22mm", preco: 35.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 14, nome: "Disco Flap Feltro Berwanger 115x22mm", preco: 25.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 15, nome: "Disco Flap Acabamento Médio Vermelho", preco: 30.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 16, nome: "Disco Flap Acabamento Grosso Marrom", preco: 30.00, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },
    { id: 17, nome: "Disco Flap Berwanger 115x22mm", preco: 7.50, categoria: "Discos", imagem: "assets/images/disco flap acabamento.jpeg.png" },

    // LIXAS E CINTAS
    { id: 18, nome: "PG Misto Scoth Brite 25x150", preco: 55.00, categoria: "Lixas e Cintas", imagem: "assets/images/pg misto.jpeg.png" },
    { id: 19, nome: "PG Misto Scoth Brite 50x150", preco: 75.00, categoria: "Lixas e Cintas", imagem: "assets/images/pg misto.jpeg.png" },
    { id: 20, nome: "Disco de Lixa Red Deerfos 300", preco: 27.50, categoria: "Lixas e Cintas", imagem: "assets/images/disco de lixa.jpeg.png" },
    { id: 21, nome: "Disco de Lixa 3M 178x22,3", preco: 12.50, categoria: "Lixas e Cintas", imagem: "assets/images/disco de lixa.jpeg.png" },
    { id: 22, nome: "Lixa Bora 7 LS990S 50x1000", preco: 25.00, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 23, nome: "Lixa Bora 7 LS990S 50x1500", preco: 35.00, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 24, nome: "Lixa Bora 7 LS990S 50x2000", preco: 45.00, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 25, nome: "Lixa Amarela LS312JF 50x1200", preco: 12.50, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 26, nome: "Cinta Zircônia Deerfos XZ677 50x2000", preco: 32.50, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 27, nome: "Lixa Marrom Deerfos KA169 50x2000", preco: 20.00, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 28, nome: "Lixa CS922Y 50x1200", preco: 20.00, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },
    { id: 29, nome: "Cinta de Lixa KA169 50x444", preco: 7.50, categoria: "Lixas e Cintas", imagem: "assets/images/lixa bora.jpeg.png" },

    // RODAS SISAL E ALGODÃO
    { id: 30, nome: "Roda Rosa Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda lisa.jpeg.png" },
    { id: 31, nome: "Roda Azul Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda lisa.jpeg.png" },
    { id: 32, nome: "Roda Laranja Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda lisa.jpeg.png" },
    { id: 33, nome: "Roda Lisa Sisal/Algodão 1A 150x13", preco: 25.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda lisa.jpeg.png" },
    { id: 34, nome: "Roda Tela Sisal/Algodão 1A 200x13", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda tela.jpeg.png" },
    { id: 35, nome: "Roda Standard Sisal 4 250x32", preco: 95.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda standart.jpeg.png" },
    { id: 36, nome: "Roda Ventilada Algodão Rosa 250x13", preco: 35.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda ventilada.jpeg.png" },
    { id: 37, nome: "Roda Ventilada Algodão Amarela 200x13", preco: 25.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda ventilada.jpeg.png" },
    { id: 38, nome: "Roda Plissada Algodão Rosa 300x32", preco: 55.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda plissada.jpeg.png" },
    { id: 39, nome: "Roda Brim 150x13", preco: 15.00, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda brim.jpeg.png" },
    { id: 40, nome: "Roda Ventilada Flanela 250x13", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "assets/images/roda ventilada.jpeg.png" },

    // ESCOVAS
    { id: 41, nome: "Escova de Corda Torcida 5 argolas", preco: 105.00, categoria: "Escovas", imagem: "assets/images/escova de corda.jpeg.png" },
    { id: 42, nome: "Escova de Corda Trançada 2 argolas", preco: 125.00, categoria: "Escovas", imagem: "assets/images/escova de corda.jpeg.png" },
    { id: 43, nome: "Escova de Fibra 250x32", preco: 75.00, categoria: "Escovas", imagem: "assets/images/escova de fibra.jpeg.png" },
    { id: 44, nome: "Escova de Fibra 350x32", preco: 85.00, categoria: "Escovas", imagem: "assets/images/escova de fibra.jpeg.png" },
    
    // MASSAS DE POLIR E SEBO
    { id: 45, nome: "Sebo - barra", preco: 17.50, categoria: "Massas de Polir e Sebo", imagem: "assets/images/sebo.jpeg.png" },
    { id: 46, nome: "Sebo - kilo", preco: 23.50, categoria: "Massas de Polir e Sebo", imagem: "assets/images/sebo.jpeg.png" },
    { id: 47, nome: "Massa Branca", preco: 25.00, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa.jpeg.png" },
    { id: 48, nome: "Massa Azul", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa.jpeg.png" },
    { id: 49, nome: "Massa Rosa", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa.jpeg.png" },
    { id: 50, nome: "Massa Marrom", preco: 15.00, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa.jpeg.png" },
    { id: 51, nome: "Massa Olga 02 - kilo", preco: 32.50, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa olga.jpeg.png" },
    { id: 52, nome: "Massa Olga 04", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "assets/images/massa olga.jpeg.png" },

    // EPIS
    { id: 53, nome: "Luva de Raspa Longa", preco: 17.50, categoria: "EPIs e Proteção", imagem: "assets/images/luva.jpeg.png" },
    { id: 54, nome: "Luva Raspa Curta", preco: 12.50, categoria: "EPIs e Proteção", imagem: "assets/images/luva.jpeg.png" },
    { id: 55, nome: "Luva Vaqueta Mista", preco: 18.50, categoria: "EPIs e Proteção", imagem: "assets/images/luva.jpeg.png" },
    { id: 56, nome: "Luva de Pano", preco: 3.00, categoria: "EPIs e Proteção", imagem: "assets/images/luva.jpeg.png" },
    { id: 57, nome: "Avental Soldador Raspa", preco: 45.00, categoria: "EPIs e Proteção", imagem: "assets/images/avental.jpeg.png" },
    { id: 58, nome: "Avental Barbeiro Raspa", preco: 95.00, categoria: "EPIs e Proteção", imagem: "assets/images/avental.jpeg.png" },
    { id: 59, nome: "Mangote de Raspa", preco: 25.00, categoria: "EPIs e Proteção", imagem: "assets/images/mangote.jpeg.png" }
];
