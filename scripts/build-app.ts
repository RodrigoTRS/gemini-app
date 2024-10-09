import { exec } from "child_process";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = path.join(__dirname, "..");


export async function buildApp() {
    return new Promise<void>((resolve, reject) => {
        exec(`cd ${root} && npm run build`, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
                return reject(error);
            }
    
            if (stderr) {
                return reject(stderr);
            }
    
            return resolve();
        });
    });
}
