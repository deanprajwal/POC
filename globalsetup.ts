import { FullConfig } from "@playwright/test";

async function globalSetup(config:FullConfig){
    console.log('inside teardown '+config.fullyParallel);
}
export default globalSetup