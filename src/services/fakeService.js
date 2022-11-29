import axios from 'axios';

export const fakeServiceFetchData = async (
	seed,
	errorsAmount,
	country,
	page,
	size
) => {
	try {
		const {data} = await axios.get(
			'https://fake-nodejs-production.up.railway.app/api/faker' +
				`?seed=${seed}&error=${errorsAmount}&locale=${country}&page=${page}&size=${size}`
		);

		return data;
	} catch (error) {
		console.log(error);
	}
};
