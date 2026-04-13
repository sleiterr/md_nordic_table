import * as fs from "fs";
import * as path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const deleteFile = async (image) => {
  if (!image) return;

  try {
    let imgPath = image.replace(process.env.SERVER_HOST, "");

    let absolutePath = path.join(__dirname, "../../public" + imgPath);

    if (fs.existsSync(absolutePath)) {
      fs.unlinkSync(absolutePath);
      console.log(`Deleted image: ${absolutePath}`);
    } else {
      console.log(`File not found: ${absolutePath}`);
    }
  } catch (error) {
    console.error(`Failed to delete file: ${image}`, error);
  }
};

// USER
export const deleteUserImage = async (imagePath) => {
  if (!imagePath || imagePath.includes("no-user.jpg")) {
    return;
  }

  try {
    await deleteFile(imagePath);
  } catch (error) {
    console.error(`Failed to delete image: ${imagePath}`, error);
  }
};

// DISH
export const deleteDishImage = async (imagePath) => {
  if (!imagePath) return;

  const fileName = path.basename(imagePath);

  if (fileName === "no-image.jpg" || fileName.startsWith("seed_")) {
    return;
  }

  try {
    await deleteFile(imagePath);
  } catch (error) {
    console.error(`Failed to delete image: ${imagePath}`, error);
  }
};
