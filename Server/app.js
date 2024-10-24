import express from 'express';
import users from './Models/users.models.js'
import cors from 'cors';
import router from './Routes/user.routes.js';
const app = express();

const corsOptions = {
	origin: "*",
};


app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }))//Permite analizar datos de formularios
app.use(express.json());
// app.use('/api', router);


//Esto iría en routes; Nota: Por algún motivo, si intento trabajar con module structure
//No funciona ni el get, ni el post.
//Dejaré planteada la estructura, pero usaré el siguiente código
app.get('/api/users', (req, res) => {
	res.json(users);
});

console.info

app.post('/api/users', (req, res) => {
	let flag = true;
	const { name, age, mail } = req.body;
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //confirmar que es un correo

	if (!(age > 18 && age < 60)) flag = false;
	if (!regex.test(mail)) flag = false;
	if (flag) {
		users.push({ name, age, mail });
		res.status(200).json({
			message: "Usuario registrado Correctamente	"
		});
	}
	else {
		res.status(406).sendStatus();
	}
})

app.listen(8080, () => {
	console.log('Server started on http://localhost:8080')
})