
const emissionFactorPerLiter = {
  gazoline: 2.35, // kg/l
  disel: 2.68,
	gaz: 1.95,
	kerasine: 3.15,
	electro: 0.5, // kg/km
};

const transportType = {
	car: 0.07, // l/km
	bus: 0.2,
	train: 20,
	truck: 0.3,
	motorbike: 0.05,
	yaht: 2,
	ship: 1.5,
	smallboat: 1,
	cruiseship: 2.5,
	shortDiastancePlane: 2,
	longDiastancePlane: 3,

	tram: 0.4, // kwat*hour/km
	trolleybus: 0.3,
	electroCar: 0.2,
	electroTrain: 2.5,
	subway: 0.9
}

const averagePassengers = {
	car: 2,
	bus: 18,
	train: 250,
	truck: 1,
	motorbike: 1,
	yaht: 20,
	ship: 1500,
	smallboat: 12,
	cruiseship: 1500,
	shortDiastancePlane: 100,
	longDiastancePlane: 200,

	tram: 50, 
	trolleybus: 50,
	electroCar: 2,
	electroTrain: 350,
	subway: 350
}

export default function footprintCalc(transport, distance) {

	let emission
	let passengers

	switch (transport) {
		case "car":
		case "motorbike":
		case "smallboat":
			emission = emissionFactorPerLiter.gazoline
			break;
		case 'truck':
		case 'bus':
		case 'yaht':
		case 'ship':
		case 'train':
			emission = emissionFactorPerLiter.disel
			break;
		case 'cruiseship':
			emission = emissionFactorPerLiter.gaz
			break;
		case 'shortDiastancePlane':
		case 'longDiastancePlane':
			emission = emissionFactorPerLiter.kerasine
		break
		case 'tram':
		case 'trolleybus':
		case 'electroCar':
		case 'electroTrain':
		case 'subway':
			emission = emissionFactorPerLiter.electro
		break
	}

	switch (transport) {
		case "car":
			 passengers = averagePassengers.car
			 break;
		case "motorbike":
			passengers = averagePassengers.motorbike
			break;
		case "smallboat":
			passengers = averagePassengers.smallboat
			break;
		case 'truck':
			passengers = averagePassengers.truck
			break;
		case 'bus':
			passengers = averagePassengers.bus
			break;
		case 'yaht':
			passengers = averagePassengers.yaht
			break;
		case 'ship':
			passengers = averagePassengers.ship
			break;
		case 'train':
			passengers = averagePassengers.train
			break;
		case 'cruiseship':
			passengers = averagePassengers.cruiseship
			break;
		case 'shortDiastancePlane':
			passengers = averagePassengers.shortDiastancePlane
			break;
		case 'longDiastancePlane':
			passengers = averagePassengers.longDiastancePlane
			break;
		case 'tram':
			passengers = averagePassengers.tram
			break;
		case 'trolleybus':
			passengers = averagePassengers.trolleybus
			break;
		case 'electroCar':
			passengers = averagePassengers.electroCar
			break;
		case 'electroTrain':
			passengers = averagePassengers.electroTrain
			break;
		case 'subway':
			passengers = averagePassengers.subway
			break;
	}


	console.log("emmision", emission)
	console.log("transportType[transport]" , transportType[transport] )

	if(!transport || !distance){
		return 0
	}

	const result =  Math.round(transportType[transport] * emission * parseInt(distance) / passengers)
	console.log("result", result)
	return result
}
