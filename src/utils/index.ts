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

export function fallbackCopyTextToClipboard(text: string) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  
  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
export function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(function() {
    console.log('Async: Copying to clipboard was successful!');
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}