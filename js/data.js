// Catálogo automático extraído do PDF
const produtos = [
    // RODAS PGS
    { id: 1, nome: "Rodas PGS 25x150x45 - grãos 36 a 280", preco: 40.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+25x150" },
    { id: 2, nome: "Rodas PGS 25x150x45 - grãos 320 a 800", preco: 45.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+25x150" },
    { id: 3, nome: "Rodas PGS 50x150x45 - qualquer grão", preco: 65.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+50x150" },
    { id: 4, nome: "Rodas PGS 25x250x85 - qualquer grão", preco: 105.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+25x250" },
    { id: 5, nome: "Roda PGS 50x250x85 - qualquer grão", preco: 180.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+50x250" },
    { id: 6, nome: "Rodas PGS 30x150x25", preco: 52.50, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PGS+30x150" },
    { id: 7, nome: "Roda PG com Rosca M14 115x20mm", preco: 52.50, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+PG+Rosca" },
    { id: 8, nome: "Roda PG Mista Berwanger 100x50xM14", preco: 52.50, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+Mista+100" },
    { id: 9, nome: "Roda PG Mista Berwanger 115x20xM14", preco: 40.00, categoria: "Rodas PGS", imagem: "https://via.placeholder.com/300x200?text=Roda+Mista+115" },

    // DISCOS
    { id: 10, nome: "Disco de Corte Berwanger 115x22,2mm", preco: 3.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Corte" },
    { id: 11, nome: "Disco Esponja Acabamento Berwanger", preco: 25.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Esponja" },
    { id: 12, nome: "Disco Feltro Berwanger 115x22mm", preco: 25.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Feltro" },
    { id: 13, nome: "Disco Removedor Berwanger 115x22mm", preco: 35.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Removedor" },
    { id: 14, nome: "Disco Flap Feltro Berwanger 115x22mm", preco: 25.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Flap+Feltro" },
    { id: 15, nome: "Disco Flap Acabamento Médio Vermelho", preco: 30.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Flap+Vermelho" },
    { id: 16, nome: "Disco Flap Acabamento Grosso Marrom", preco: 30.00, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Flap+Marrom" },
    { id: 17, nome: "Disco Flap Berwanger 115x22mm", preco: 7.50, categoria: "Discos", imagem: "https://via.placeholder.com/300x200?text=Disco+Flap" },

    // LIXAS E CINTAS
    { id: 18, nome: "PG Misto Scoth Brite 25x150", preco: 55.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=PG+Scoth+Brite" },
    { id: 19, nome: "PG Misto Scoth Brite 50x150", preco: 75.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=PG+Scoth+Brite" },
    { id: 20, nome: "Disco de Lixa Red Deerfos 300", preco: 27.50, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Disco+Red+Deerfos" },
    { id: 21, nome: "Disco de Lixa 3M 178x22,3", preco: 12.50, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Disco+3M" },
    { id: 22, nome: "Lixa Bora 7 LS990S 50x1000", preco: 25.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+Bora+7" },
    { id: 23, nome: "Lixa Bora 7 LS990S 50x1500", preco: 35.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+Bora+7" },
    { id: 24, nome: "Lixa Bora 7 LS990S 50x2000", preco: 45.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+Bora+7" },
    { id: 25, nome: "Lixa Amarela LS312JF 50x1200", preco: 12.50, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+Amarela" },
    { id: 26, nome: "Cinta Zircônia Deerfos XZ677 50x2000", preco: 32.50, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Cinta+Zirconia" },
    { id: 27, nome: "Lixa Marrom Deerfos KA169 50x2000", preco: 20.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+Marrom" },
    { id: 28, nome: "Lixa CS922Y 50x1200", preco: 20.00, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Lixa+CS922Y" },
    { id: 29, nome: "Cinta de Lixa KA169 50x444", preco: 7.50, categoria: "Lixas e Cintas", imagem: "https://via.placeholder.com/300x200?text=Cinta+KA169" },

    // RODAS SISAL E ALGODÃO
    { id: 30, nome: "Roda Rosa Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Rosa" },
    { id: 31, nome: "Roda Azul Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Azul" },
    { id: 32, nome: "Roda Laranja Lisa Sisal/Algodão", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Laranja" },
    { id: 33, nome: "Roda Lisa Sisal/Algodão 1A 150x13", preco: 25.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Lisa+150" },
    { id: 34, nome: "Roda Tela Sisal/Algodão 1A 200x13", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Tela+200x13" },
    { id: 35, nome: "Roda Standard Sisal 4 250x32", preco: 95.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Standard+Sisal" },
    { id: 36, nome: "Roda Ventilada Algodão Rosa 250x13", preco: 35.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Ventilada+Rosa" },
    { id: 37, nome: "Roda Ventilada Algodão Amarela 200x13", preco: 25.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Ventilada+Amarela" },
    { id: 38, nome: "Roda Plissada Algodão Rosa 300x32", preco: 55.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Plissada+Rosa" },
    { id: 39, nome: "Roda Brim 150x13", preco: 15.00, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Roda+Brim" },
    { id: 40, nome: "Roda Ventilada Flanela 250x13", preco: 27.50, categoria: "Rodas de Algodão e Sisal", imagem: "https://via.placeholder.com/300x200?text=Ventilada+Flanela" },

    // ESCOVAS
    { id: 41, nome: "Escova de Corda Torcida 5 argolas", preco: 105.00, categoria: "Escovas", imagem: "https://via.placeholder.com/300x200?text=Escova+Corda+Torcida" },
    { id: 42, nome: "Escova de Corda Trançada 2 argolas", preco: 125.00, categoria: "Escovas", imagem: "https://via.placeholder.com/300x200?text=Escova+Corda+Trancada" },
    { id: 43, nome: "Escova de Fibra 250x32", preco: 75.00, categoria: "Escovas", imagem: "https://via.placeholder.com/300x200?text=Escova+Fibra+250" },
    { id: 44, nome: "Escova de Fibra 350x32", preco: 85.00, categoria: "Escovas", imagem: "https://via.placeholder.com/300x200?text=Escova+Fibra+350" },
    
    // MASSAS DE POLIR E SEBO
    { id: 45, nome: "Sebo - barra", preco: 17.50, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Sebo+Barra" },
    { id: 46, nome: "Sebo - kilo", preco: 23.50, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Sebo+Kilo" },
    { id: 47, nome: "Massa Branca", preco: 25.00, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Branca" },
    { id: 48, nome: "Massa Azul", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Azul" },
    { id: 49, nome: "Massa Rosa", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Rosa" },
    { id: 50, nome: "Massa Marrom", preco: 15.00, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Marrom" },
    { id: 51, nome: "Massa Olga 02 - kilo", preco: 32.50, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Olga+02" },
    { id: 52, nome: "Massa Olga 04", preco: 30.00, categoria: "Massas de Polir e Sebo", imagem: "https://via.placeholder.com/300x200?text=Massa+Olga+04" },

    // EPIS
    { id: 53, nome: "Luva de Raspa Longa", preco: 17.50, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Luva+Raspa+Longa" },
    { id: 54, nome: "Luva Raspa Curta", preco: 12.50, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Luva+Raspa+Curta" },
    { id: 55, nome: "Luva Vaqueta Mista", preco: 18.50, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Luva+Vaqueta" },
    { id: 56, nome: "Luva de Pano", preco: 3.00, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Luva+Pano" },
    { id: 57, nome: "Avental Soldador Raspa", preco: 45.00, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Avental+Soldador" },
    { id: 58, nome: "Avental Barbeiro Raspa", preco: 95.00, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Avental+Barbeiro" },
    { id: 59, nome: "Mangote de Raspa", preco: 25.00, categoria: "EPIs e Proteção", imagem: "https://via.placeholder.com/300x200?text=Mangote+Raspa" }
];
