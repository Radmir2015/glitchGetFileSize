const app = require("express")();
const multer = require("multer");
const upload = multer({desc: "public/"});

app.get("/", (req, res) => {
  res.send("<form action='/upload' method='post' enctype='multipart/form-data'><input type='file' name='getFile'><input type='submit'></form>")
})

app.post("/upload", upload.single("getFile"), (req, res, next) => {
  res.json({size: req.file.size, otherInformation: req.file});
})

app.listen(3000, function () {
  console.log("Server is running on 3000 port...");
})