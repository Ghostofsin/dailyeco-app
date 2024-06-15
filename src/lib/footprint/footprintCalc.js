
const emissions = {
	gazoline : {
		emission : 2.35,
		transport : [ "car", "motorbike", "smallboat"]
	},
	disel : {
		emission : 2.68,
		transport : ['truck','bus','yaht','ship','train']
	} ,
	gaz : {
		emission : 1.95,
		transport : ["cruiseship"]
	} ,
	kerasine : {
		emission : 3.15,
		transport : ['shortDiastancePlane', 'longDiastancePlane']
	} ,
	electro : {
		emission : 0.5,
		transport : ['tram','trolleybus','electroCar','electroTrain','subway']
	} 
}

const transportCharacteristics = {  
	// l/km
	car: {
		consumption: 0.07,
		averagePassengers: 2,
	},
	bus: {
		consumption: 0.2,
		averagePassengers: 18,
	},
	train: {
		consumption: 20,
		averagePassengers: 250,
	},
	truck: {
		consumption: 0.3,
		averagePassengers: 1,
	},
	motorbike: {
		consumption: 0.05,
		averagePassengers: 1,
	},
	yaht: {
		consumption: 2,
		averagePassengers: 20,
	},
	ship: {
		consumption: 1.5,
		averagePassengers: 150,
	},
	smallboat: {
		consumption: 1,
		averagePassengers: 12,
	},
	cruiseship: {
		consumption: 2.5,
		averagePassengers: 1500,
	},
	shortDiastancePlane: {
		consumption: 2,
		averagePassengers: 100,
	},
	longDiastancePlane: {
		consumption: 3,
		averagePassengers: 200,
	},
// kwat*hour/km
	tram: {
		consumption: 0.4,
		averagePassengers: 50,
	},
	trolleybus: {
		consumption: 0.3,
		averagePassengers: 50,
	},
	electroCar: {
		consumption: 0.2,
		averagePassengers: 2,
	},
	electroTrain: {
		consumption: 2.5,
		averagePassengers: 350,
	},
	subway: {
		consumption: 0.9,
		averagePassengers: 350,
	},
}

export default function footprintCalc(transport, distance) {

	let emission
	let passengers
	let consumption

	for (const property in emissions) {
    if (emissions[property].transport.includes(transport)) emission = emissions[property].emission
	}

	for (const property in transportCharacteristics) {
    if (property === transport) {
			passengers = transportCharacteristics[property].averagePassengers
			consumption = transportCharacteristics[property].consumption
		} 
	}

	// console.log("emmision", emission)

	if(!transport || !distance || typeof distance !== "number"){
		return 0
	}

	const result =  Math.round(consumption * emission * parseInt(distance) / passengers)
	console.log("result", result)
	return result
}
