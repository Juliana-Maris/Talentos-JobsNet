const express = require('express');
const app = express();
const User = require('./models/User');

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())

const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Rotas
app.post('/add', async function (req, res) {
    cpf_matches = await User.findOne({
       cpf: req.body.cpf
    })
    console.log(cpf_matches);

    if (cpf_matches) {
        res.status(400).json({
            error: 1
        })
    } else {
        User.create({
            nome: req.body.nome,
            cargo: req.body.cargo,
            nascimento: req.body.nascimento,
            civil: req.body.civil,
            sexo: req.body.sexo,
            cep: req.body.cep,
            rua: req.body.rua,
            numero: req.body.numero,
            bairro: req.body.bairro,
            cidade: req.body.cidade,
            estado: req.body.estado,
            email: req.body.email,
            celular: req.body.celular,
            fone: req.body.fone,
            identidade: req.body.identidade,
            cpf: req.body.cpf,
            habilitacao: req.body.habilitacao,
            veiculo: req.body.veiculo
        }).then(() => {
            res.redirect(301, "/submitted.html")
        }).catch((erro) => {
            res.status(500)
        })
    }
})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Servidor rodando na url http://localhost:8000`)
});