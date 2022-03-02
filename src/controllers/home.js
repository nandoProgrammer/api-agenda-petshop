const Atendimento = require('../models/atendimento')

module.exports = app => {
    app.get('/hello', (req, res) => {
        return res.json({'ok':'ok'})
    });

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body;
        Atendimento.adiciona(atendimento)
        return res.json(res)
    });
}