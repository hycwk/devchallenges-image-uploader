const express = require('express');
const cors = require('cors')
const app = express();
var ImageKit = require("imagekit");

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.post('/imagekit', (req, res) => {

	var imagekit = new ImageKit({
		publicKey : "public_+1UUK4TMABTVC+CNeIO4UaNzZyA=",
		privateKey : "private_4WfkVX+hjzKDs3uaqU0gn/si+ao=",
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
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));