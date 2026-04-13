import { seedDishes, seedBookings, seedUsers } from "./seed/seed.mjs";

console.log("----------------------");
console.log("Media College Viborg");
console.log("Seeding files");
console.log("----------------------\n");

const start = Date.now();

async function run() {
  try {
    // Korrekt rækkefølge så relationer findes, når users oprettes
    await seedDishes();
    await seedBookings();
    await seedUsers();

    const ms = Date.now() - start;
    console.log("\n----------------------");
    console.log("Seeding files completed");
    console.log(`Duration: ${ms} ms`);
    console.log("----------------------");
    process.exit(0);
  } catch (err) {
    console.error("\n[SEED ERROR]");
    console.error(err?.stack || err);
    process.exit(1);
  }
}

await run();
