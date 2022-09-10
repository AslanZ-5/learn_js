const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '76ec22ba7cmsh5f4d7294c947a75p198d7bjsn8345a4148966',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/nazran', options)
	.then(response => response.json())
	.then(response => console.log(response.weather[0].main))
	.catch(err => console.error(err));