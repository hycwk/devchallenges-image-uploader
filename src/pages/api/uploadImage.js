var ImageKit = require("imagekit");

export default function handler(req, res) {
	if (req.method === 'POST') {
    // Process a POST request
		var imagekit = new ImageKit({
			publicKey : process.env.PUBLIC_KEY,
			privateKey : process.env.PRIVATE_KET,
			urlEndpoint : "https://ik.imagekit.io/zbfky4hzxb3"
		});
	
		const file = req.body.file;
	
		imagekit.upload({
			file: file, //required
			fileName : "devChallenge.jpg",   //required
			extensions: [
					{
							name: "google-auto-tagging",
							maxTags: 5,
							minConfidence: 95
					}
			]
		}, function(error, result) {
				if(error) res.send(error);
				else res.send(result);
		});
  } else {
    // Handle any other HTTP method
		return {
			error: 'wrong method'
		}
  }
}