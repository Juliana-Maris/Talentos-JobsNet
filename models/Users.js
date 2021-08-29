const db = requeri('./db');


const UserSchema = db.mongoose.Schema({
    nome: {
        type: String
    },
    cargo: {
        type: String
    },
    nascimento: {
        type: String
    },
    civil: {
        type: String
    },
    sexo:  {
        type: String
    },
    cep:  {
        type: String
    },
    rua:  {
        type: String
    },
    numero:  {
        type: String
    },
    bairro: {
        type: String
    },
    cidade:  {
        type: String
    },
    estado:  {
        type: String
    },
    email:  {
        type: String,
    },
    celular: {
        type: String
    },
    fone: {
        type: String
    },
    identidade: {
        type: String
    },
    cpf:  {
        type: String,
        require: true
    },
    habilitacao: {
        type: String
    },
    carro:  {
        type: String
    }

});

const User = db.mongoose.model('usuarios', UserSchema)

module.exports = User;