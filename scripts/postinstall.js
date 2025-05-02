#!/usr/bin/env node

import { chmodSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// __dirname replacement in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const plat = process.platform;
if (plat === "linux") {
    const dir = join(__dirname, "..", "bin", "linux");
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isFile()) {
            try {
                chmodSync(full, 0o755);
                console.log(`✓ +x ${full}`);
            } catch (e) {
                console.warn(`⚠️ failed to chmod ${full}: ${e.message}`);
            }
        }
    }
}

if (plat === "darwin") {
    const dir = join(__dirname, "..", "bin", "darwin");
    for (const name of readdirSync(dir)) {
        const full = join(dir, name);
        if (statSync(full).isFile()) {
            try {
                chmodSync(full, 0o755);
                console.log(`✓ +x ${full}`);
            } catch (e) {
                console.warn(`⚠️ failed to chmod ${full}: ${e.message}`);
            }
        }
    }
}
