export const convertBase64 = (callback: (reader: FileReader) => void) => (files: FileList) => {
	let reader = new FileReader();
	reader.onloadend = () => callback(reader);
	reader.readAsDataURL(files[0]);
};

export const fetchAPI = async (reader: FileReader) => {

	let headersList = {
		"Accept": "application/json",
		"Content-Type": "application/json"
	}
	let bodyContent = {'file': reader.result};

	return await fetch("http://localhost:8080/imagekit", {
		method: "POST",
		body: JSON.stringify(bodyContent),
		headers: headersList
	}).then(function (response) {
		return response.text();
	}).then(function (data) {
		return data
	})
}

export const ajaxUploadImageKit = (callback: (result: string) => void) => convertBase64( async (reader) => {
	const result = await fetchAPI(reader);
	callback(result)
})