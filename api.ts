import * as express from 'express'
import { MongoClient } from 'mongodb'
const app = express();

const url:string = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);
const dbName:string = 'sport';

type Exercice = {
    id: number;
    groupe: string[];
	nom: string;
	materiel: string;
	mode: string;
	description: string;
	url: string;
}

app.use(express.json())

app.get('/sport', async (req,res) => {
	await client.connect();
	const db = client.db(dbName);
	const collection = db.collection('exercice');
	const findResult = await collection.find({}).project({ _id: 0 }).toArray();
    res.status(200).json(findResult);
})

app.get('/sport/:nbExercice', async (req,res) => {
	await client.connect();
	const db = client.db(dbName);
	const collection = db.collection('exercice');
	const findResult = await collection.find({}).project({ _id: 0 }).toArray();
	const resultConverted:Exercice[] = documentToExercice(findResult);
	let exercices:Exercice[] = newAdjustExercices(parseInt(req.params.nbExercice),resultConverted);
	sortExercices(exercices);
    res.status(200).json(exercices);
})

function newAdjustExercices(nb:number,exercices:Exercice[]):Exercice[] {
	const newExercices:Exercice[] = exercices;
	const iteration:number = nb-exercices.length;
	const size:number = exercices.length;
	if (nb > size) {
		for (let i:number = 0; i < iteration; i++) {
			const exercice = exercices[randomInt(size-1)];
			newExercices.push(exercice);
		}
	} else if(nb > 0) {
		newExercices.splice(0,size-nb);
	}
	return newExercices;
}

function documentToExercice(document:any[]):Exercice[] {
	const exercices:Exercice[] = [];
	for (let i:number = 0; i < document.length; i++) {
		const exercice:Exercice = {
			id: document[i].id,
			groupe: document[i].groupe,
			nom: document[i].nom,
			materiel: document[i].materiel,
			mode: document[i].mode,
			description: document[i].description,
			url: document[i].url
		}
		exercices.push(exercice);
	}
	return exercices;
}

function sortExercices(exercices:Exercice[]) {
	let n:number = 0;
	while (n !== exercices.length-1) {
		for (let i:number = n+1; i < exercices.length; i++) {
			if (compareExercices(exercices[n],exercices[i])) {
				arrayMove(exercices,i,n);
				break;
			}
		}
		n++;
	}
}

function compareExercices(initial:Exercice,second:Exercice):boolean {
	for (let i:number = 0; i < initial.groupe.length; i++) {
		for (let j:number = 0; j < second.groupe.length; j++) {
			if (initial.groupe[i] === second.groupe[j]) {
				return true;
			}
		}
	}
	return false;
}

function arrayMove(arr:Exercice[], fromIndex:number, toIndex:number) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
}

function randomInt(max:number):number {
	return Math.floor(Math.random() * Math.floor(max));
}

app.listen(3112, () => {
	    console.log("Rest API sport 1.0.0 write in typescript up")
})