// SPDX-License-Identifier: MIT
// gta6-meme-x-01: copy POST.json (the X post's address) to the output directory.
// The entry is the post itself; the house reads the post from X. This program
// only hands POST.json to the grader, byte for byte. Deterministic: the same
// input bytes always produce the same output bytes, with no network or clock.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = readFileSync(join(repoRoot, 'POST.json'));
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'POST.json'), source);
