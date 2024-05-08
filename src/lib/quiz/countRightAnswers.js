const criteria = {
  quest1: ["99"],
  quest2: ["true"],
  quest3: ["all"],
  quest4: ["2"],
  quest5: ["20"],
  quest6: ["sulfur", "methane", "carbon", "nitrous"],
  quest7: ["gases-absorb"],
  quest8: ["true"],
  quest9: ["all"]
};


export default function countRightAnswers(formData) {
  let sum = 0;

	formData.forEach((value, key) => {
		if (criteria[key]) {
				if (criteria[key].includes(value) && key !== "quest7") {
					sum++;
				}
			} else {
					sum += 3;
			}
	});

  return sum;
}