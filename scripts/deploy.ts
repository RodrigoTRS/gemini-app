import { buildApp } from "./build-app";
import { uploadToS3 } from "./upload-to-s3";

async function deploy() {
    await buildApp();
    const upload = await uploadToS3();
    console.log(upload)
}

deploy();