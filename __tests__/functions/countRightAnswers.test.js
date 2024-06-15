import countRightAnswers from "@/lib/quiz/countRightAnswers";


describe("testing countRightAnswers function with some answers", () => {

	it(`returns zero if  formData is undefined`, () => {
    expect(countRightAnswers(undefined)).toBe(0);
  });

	it("should be 0 if array with no questions fields", () => {
		const formDataMock = new FormData();
		formDataMock.append('quest0', '99')
    expect(countRightAnswers(formDataMock)).toBe(0);
  });

	it("should be 1 if array with 1 right answer", () => {
		const formDataMock = new FormData();
		formDataMock.append('quest1', '99')
    expect(countRightAnswers(formDataMock)).toBe(1);
  });

	it("should be 3 if quest7 has right answer", () => {
		const formDataMock = new FormData();
		formDataMock.append('quest7', 'gases-absorb')
    expect(countRightAnswers(formDataMock)).toBe(3);
  });

	it("should be 0 if all answers are wrong", () => {
		const formDataMock = new FormData();

		formDataMock.append('quest1', '10')
		formDataMock.append('quest2', 'false')
		formDataMock.append('quest3', 'notall')
		formDataMock.append('quest4', '1')
		formDataMock.append('quest5', '10')
		formDataMock.append('quest6', 'sulfurium')
		formDataMock.append('quest7', 'gases')
		formDataMock.append('quest8', 'false')
		formDataMock.append('quest9', 'notall')
		
		expect(countRightAnswers(formDataMock)).toBe(0);
  });

	it("should be 14 if all answers are right", () => {
		const formDataMock = new FormData();

		formDataMock.append('quest1', '99')
		formDataMock.append('quest2', 'true')
		formDataMock.append('quest3', 'all')
		formDataMock.append('quest4', '2')
		formDataMock.append('quest5', '20')
		formDataMock.append('quest6', 'sulfur')	
		formDataMock.append('quest6', 'methane')
		formDataMock.append('quest6', 'carbon')
		formDataMock.append('quest6', 'nitrous')
		formDataMock.append('quest7', 'gases-absorb')
		formDataMock.append('quest8', 'true')
		formDataMock.append('quest9', 'all')

    expect(countRightAnswers(formDataMock)).toBe(14);
  });
});
