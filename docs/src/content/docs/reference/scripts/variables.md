---
title: Variables
sidebar:
    order: 8
---

The `env.vars` object contains a set of variable values. You can use these variables to parameterize your script.

```js
// grab locale from variable or default to en-US
const locale = env.vars.locale || "en-US"
```

### Variables from the CLI

Use the `vars` field in the CLI to override variables. vars takes a sequence of `key=value` pairs.

```bash
node .genaiscript/genaiscript.cjs run ... --vars myvar=myvalue myvar2=myvalue2 ...
```

## Spec Variables

If a [spec](/genaiscript/reference/specs/), you can configure variables as well.

```markdown
Lorem ipsum...

<!-- @locale latin -->
```