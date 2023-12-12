import { describe, test } from "node:test"
import assert from "node:assert/strict"
import { parseLLMDiffs } from "gptools-core"

test("is_valid_email", () => {
    const source = `[1] import re
[2] 
[3] def is_valid_email(email):
- [4]     if re.fullmatch(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", email):
+ [4]     pattern = re.compile(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+")
+ [5]     if pattern.fullmatch(email):
[6]         return True
[7]     else:
[8]         return False`
    const chunks = parseLLMDiffs(source)
    assert.equal(chunks.length, 4)
})

test("missing line numbers", () => {
    const source = `
[10] CONSTANT
-     \* @type: XXX;
+     \* @type: Int;
[15] VARIABLES
-     \* @type: [Node -> XXX];
+     \* @type: [Node -> Bool];
-     \* @type: [Node -> XXX];
+     \* @type: [Node -> Str];
-     \* @type: XXX;
+     \* @type: Int;
-     \* @type: XXX;
+     \* @type: Str;
`

    const chunks = parseLLMDiffs(source)
    console.log(chunks)
    assert.equal(chunks.length, 12)
})
