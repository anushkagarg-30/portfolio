#!/usr/bin/env node
/**
 * Removes Cursor co-author trailers from commit messages.
 * Used by Husky commit-msg hook.
 */
const fs = require("fs");

const commitMsgFile = process.argv[2];
if (!commitMsgFile) {
  process.exit(0);
}

const message = fs.readFileSync(commitMsgFile, "utf8");
const cleaned = message
  .split("\n")
  .filter(
    (line) =>
      !/^Co-authored-by:\s*Cursor\s*<cursoragent@cursor\.com>\s*$/i.test(line)
  )
  .join("\n")
  .replace(/\n{3,}/g, "\n\n")
  .replace(/\n+$/, "\n");

if (cleaned !== message) {
  fs.writeFileSync(commitMsgFile, cleaned);
}
