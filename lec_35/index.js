const { createClient } = require("redis");

const client = createClient();

client.on("error", function (err) {
  console.log("Redis Client Error:", err);
});

async function cacheUserProfile() {
  const profileData = { name: "Tejasv", age: "20" };
  await client.set("user:2", JSON.stringify(profileData));
  console.log("✅ Profile for user:2 has been cached.");
}

async function readProfile(userId) {
  const key = `user:${userId}`;
  const data = await client.get(key);

  if (!data) {
    console.log(`❌ No profile found for ${key}.`);
    return null;
  }

  console.log(`✅ Found profile for ${key}:`, data);
  return JSON.parse(data); // Parse the string back into an object
}

// Main function to run the logic
async function main() {
  await client.connect();

  await cacheUserProfile();
  await readProfile("2"); // This will be a cache HIT
  await readProfile("99"); // This will be a cache MISS

  await client.disconnect();
}

main();