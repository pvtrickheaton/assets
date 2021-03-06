import { sanityFixAll } from "../action/update-all";

export async function main(): Promise<void> {
    try {
        await sanityFixAll();
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

main();
