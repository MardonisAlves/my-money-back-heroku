const mongoose = require('mongoose')

constmongoose = require('mongoose')
mongoose.Promise = global.Promise

const url = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb//localhost/mymoney'

module.exports = async () => {

try{
	mongoose.connect(
    url,
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
    useCreateIndex: true
	})
	console.log("MongoDB is Connected...");
	
}catch(err){
	console.error(err.message);
    process.exit(1);
}
}

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min =
"O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max =
"O '{VALUE}' informado é maior que o limite máximo de '{MAX}'."
mongoose.Error.messages.String.enum =
"'{VALUE}' não é válido para o atributo '{PATH}'."

