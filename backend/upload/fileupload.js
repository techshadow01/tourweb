import { Dropbox, DropboxAuth } from "dropbox";
import fetch from "node-fetch";
import { promises as fs } from "fs";
import { config } from "dotenv";

config();

const TOKENS_FILE_PATH = "./tokens.json";

function getRedirectURL() {
  return `${process.env.BACKEND_URL}/cloud/get-refresh-token`;
}

async function readTokens() {
  try {
    const data = await fs.readFile(TOKENS_FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Error reading tokens:", error);
    return null;
  }
}

async function saveTokens(tokens) {
  try {
    await fs.writeFile(
      TOKENS_FILE_PATH,
      JSON.stringify(tokens, null, 2),
      "utf8"
    );
  } catch (error) {
    console.log("Error saving tokens:", error);
  }
}

function createDropboxInstance(accessToken) {
  return new Dropbox({
    accessToken,
    refreshToken: process.env.DROPBOX_REFRESH_TOKEN,
    fetch,
  });
}

async function refreshAccessToken() {
  const url = "https://api.dropbox.com/oauth2/token";

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: process.env.DROPBOX_REFRESH_TOKEN,
    client_id: process.env.DROPBOX_APP_KEY,
    client_secret: process.env.DROPBOX_APP_SECRET,
  });

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!response.ok) {
    throw new Error("Error refreshing access token: " + response.statusText);
  }

  const { access_token } = await response.json();
  await saveTokens({ access_token });
  return access_token;
}

function createAuthInstance() {
  return new DropboxAuth({
    clientId: process.env.DROPBOX_APP_KEY,
    clientSecret: process.env.DROPBOX_APP_SECRET,
    refreshToken: process.env.DROPBOX_REFRESH_TOKEN,
    accessToken: process.env.DROPBOX_ACCESS_TOKEN,
    fetch,
  });
}

export {
  readTokens,
  saveTokens,
  createDropboxInstance,
  refreshAccessToken,
  createAuthInstance,
  getRedirectURL,
};
