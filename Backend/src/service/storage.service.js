const {ImageKit} = require("@imagekit/nodejs");
require('dotenv').config();

const imagekit = new ImageKit({
    privateKey: "private_IFvcYALt9olQrwau8gtYKPbQppc=",
});


async function uploadFile(buffer, mimeType = "image/jpeg") {
    const result = await imagekit.files.upload({
        file: Buffer.from(buffer).toString("base64"),
        fileName: "image.jpg",
        mimeType: mimeType,
    });
    return result;
}
module.exports = uploadFile;