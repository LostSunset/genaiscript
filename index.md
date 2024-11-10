
import { Image } from "astro:assets"
import { Card, CardGrid } from "@astrojs/starlight/components"
import { FileTree } from "@astrojs/starlight/components"
import AudioPlayer from "../../components/AudioPlayer.astro"
import DirectoryLinks from "../../components/DirectoryLinks.astro"
import { Content as BuiltinAgents } from "../../components/BuiltinAgents.mdx"

import vscodeSrc from "../../../public/images/visual-studio-code.png"

import debuggerSrc from "../../assets/debugger.png"
import debuggerAlt from "../../assets/debugger.png.txt?raw"

import sarifSrc from "../../assets/tla-ai-linter.png"
import sarifAlt from "../../assets/tla-ai-linter.png.txt?raw"

import testExplorerSrc from "../../assets/vscode-test-explorer.png"
import testExplorerAlt from "../../assets/vscode-test-explorer.png.txt?raw"

## Prompting is Coding

Programmatically assemble prompts for LLMs using JavaScript. Orchestrate LLMs, tools, and data in a single script.

-   JavaScript toolbox to work with prompts
-   Abstraction to make it easy and productive
-   Seamless Visual Studio Code integration

## Hello world

Say to you want to create an LLM script that generates a 'hello world' poem. You can write the following script:

```js
$`Write a 'hello world' poem.`
```

The `$` function is a template tag that creates a prompt. The prompt is then sent to the LLM (you configured), which generates the poem.

Let's make it more interesting by adding files, data, and structured output. Say you want to include a file in the prompt, and then save the output in a file. You can write the following script:

```js
// read files
const file = await workspace.readText("data.txt")
// include the file content in the prompt in a context-friendly way
def("DATA", file)
// the task
$`Analyze DATA and extract data in JSON in data.json.`
```

The `def` function includes the content of the file, and optimizes it if necessary for the target LLM. GenAIScript script also parses the LLM output
and will extract the `data.json` file automatically.

## Next steps

<CardGrid stagger>
    <Card title="Listen to the podcast" icon="seti:audio">
        <AudioPlayer src="/genaiscript/podcasts/overview.wav" />
    </Card>
    <Card title="Install the extension" icon="puzzle">
        Install the [Visual Studio Code
        Extension](/genaiscript/getting-started/installation/) to get started.
    </Card>
    <Card title="Configure your LLMs" icon="setting">
        Configure the [secrets](/genaiscript/getting-started/configuration) to
        access your LLMs.
    </Card>
    <Card title="Write your first script" icon="pencil">
        Follow [Getting
        Started](/genaiscript/getting-started/your-first-genai-script/) to write
        your first script.
    </Card>
    <Card title="Read the docs" icon="open-book">
        Learn more about GenAIScript in the [Scripting
        Reference](/genaiscript/reference/).
    </Card>
</CardGrid>

<Image
    src={vscodeSrc}
    alt="A screenshot of VSCode with a genaiscript opened"
    loading="lazy"
/>

## Features

GenAIScript brings essential LLM prompt tooling into a cohesive scripting environment.

<CardGrid>

<Card title="Stylized JavaScript" icon="seti:javascript">

Minimal syntax to build prompts using [JavaScript](/genaiscript/reference/scripts/)
or [TypeScript](/genaiscript/reference/scripts/typescript).

```js wrap
$`Summarize ${env.files}. Today is ${new Date()}.`
```

</Card>

<Card title="Fast Development Loop" icon="rocket">

Edit, [Debug](/genaiscript/getting-started/debugging-scripts/), [Run](/genaiscript/getting-started/running-scripts/),
[Test](/genaiscript/getting-started/testing-scripts/) your scripts in [Visual Studio Code](/genaiscript/getting-started/installation)
or with a [command line](/genaiscript/getting-started/installation).

<Image src={debuggerSrc} alt={debuggerAlt} loading="lazy" />

</Card>

<Card title="LLM Tools" icon="setting">

Register JavaScript functions as [LLM tools](/genaiscript/reference/scripts/tools/)
(with fallback for models that don't support tools).

```js wrap
defTool("weather", "live weather",
    { city: "Paris" }, // schema
    async ({ city }) => // callback
        { ... "sunny" }
)
```

or use built-in [@agentic tools](/genaiscript/guides/agentic-tools/)

```js wrap
import { WeatherClient } from "@agentic/weather"
defTool(new WeatherClient())
```

</Card>

<Card title="LLM Agents" icon="sun">

Combine [tools](/genaiscript/reference/scripts/tools) and [inline prompts](/genaiscript/reference/scripts/inline-prompts/)
into an [agent](/genaiscript/reference/scripts/agents).

```js wrap
defAgent(
    "git",
    "Agent that answer git questions for the current repo",
    "You are a helpful expert in using git.",
    { tools: ["git"] }
)
```

```js wrap
script({ tools: "agent" })

$`Do a statistical analysis of the last commits`
```

</Card>

<Card title="Reuse and Share Scripts" icon="star">

Scripts are [files](/genaiscript/reference/scripts/)! They can be versioned, shared, forked, ...

<FileTree>

-   genaisrc
    -   my-script.genai.mjs
    -   another-great-script.genai.mjs

</FileTree>

</Card>

<Card title="Data Schemas" icon="list-format">

Define, validate, repair data using [schemas](/genaiscript/reference/scripts/schemas).

```js wrap
const data = defSchema("MY_DATA",
    { type: "array", items: { ... }, })
$`Extract data from files using ${data} schema.`
```

</Card>

<Card title="Ingest text from PDFs, DOCX, ..." icon="seti:pdf">

Manipulate
[PDFs](/genaiscript/reference/scripts/pdf),
[DOCX](/genaiscript/reference/scripts/docx),
...

```js wrap
// automatically convert to text
def("PDF", env.files, { endsWith: ".pdf" })
// or parse and process
const { pages } = await parsers.PDF(env.files[0])
```

</Card>

<Card title="Ingest tables from CSV, XLSX, .." icon="seti:pdf">

Manipulate tabular data from
[CSV](/genaiscript/reference/scripts/csv),
[XLSX](/genaiscript/reference/scripts/xlsx),
...

```js wrap
// automatically convert to text
def("DATA", env.files, {
    endsWith: ".csv",
    // take top 100 rows
    sliceHead: 100,
})
// or parse to JavaScript object array
const rows = await parsers.CSV(env.files[0])
// render as markdown table
defData("ROWS", rows, { sliceHead: 100 })
```

</Card>

<Card title="Generate Files" icon="document">

Extract files and diff from the LLM output.
Preview changes in Refactoring UI.

```js wrap
$`Save the result in poem.txt.`
```

````txt wrap
FILE ./poem.txt
```txt
The quick brown fox jumps over the lazy dog.
```
````

<FileTree>

-   poem.txt extracted by genaiscript

</FileTree>

</Card>

<Card title="File search" icon="document">

Grep or fuzz search [files](/genaiscript/referen/script/files)

```js wrap
const { files } = await workspace.grep(/[a-z][a-z0-9]+/, { globs: "*.md" })
```

</Card>

<Card title="Browser automation" icon="document">

Browse and scrape the web with [Playwright](/genaiscript/reference/scripts/browse).

```js
const page = await host.browse("https://...")
const table = await page.locator("table[...]").innerHTML()
def("TABLE", await HTML.convertToMarkdown(table))
```

</Card>

<Card title="RAG built-in" icon="magnifier">

[Vector search](/genaiscript/reference/scripts/vector-search/).

```js wrap
const { files } = await retrieval.vectorSearch("cats", "**/*.md")
```

</Card>

<Card title="Safety First!" icon="seti:lock">

GenAIScript provides built-in Responsible AI system prompts and Azure Content Safety supports
to validate [content safety](/genaiscript/reference/scripts/content-safety).

```js wrap
script({ ...,
    system: ["system.safety_harmful_content", ...],
    contentSafety: "azure" // use azure content safety
})

const safety = await host.contentSafety()
const res = await safety.detectPromptInjection(env.vars.input)
```

</Card>

<Card title="GitHub Models and GitHub Copilot" icon="github">

Run models through GitHub using [GitHub Models](/getting-started/configuration/#github-models)
or [GitHub Copilot](/getting-started/configuration/#github-copilot-in-visual-studio-code).

```js wrap
script({ ..., model: "github:gpt-4o" })
```

</Card>

<Card title="Local Models" icon="laptop">

Run your scripts with [Open Source models](/genaiscript/getting-started/configuration/#local-models),
like [Phi-3](https://azure.microsoft.com/en-us/blog/introducing-phi-3-redefining-whats-possible-with-slms/),
using [Ollama](https://ollama.com/), [LocalAI](https://localai.io/)...

```js wrap
script({ ..., model: "ollama:phi3" })
```

</Card>

<Card title="Code Interpreter" icon="seti:python">

Let the LLM run code in a sandboxed execution environment.

```js wrap
script({ tools: ["python_code_interpreter"] })
```

</Card>

<Card title="Containers" icon="seti:docker">

Run code in Docker [containers](/genaiscript/reference/scripts/containers).

```js wrap
const c = await host.container({
    image: "python:alpine",
})
const res = await c.exec("python --version")
```

</Card>

<Card title="LLM Composition" icon="external">

[Run LLMs](/genaiscript/reference/scripts/inline-prompts/) to build your LLM prompts.

```js wrap
// summarize each files individually
for (const file of env.files) {
    const { text } = await runPrompt((_) => {
        _.def("FILE", file)
        _.$`Summarize the FILE.`
    })
    // use result in main prompt
    def("SUMMARY", text)
}
// use summary
$`Summarize all the summaries.`
```

</Card>

<Card title="Prompty" icon="seti:markdown">

Run or convert [Prompty](https://prompty.ai/) files using GenAIScript.

```markdown title="poem.prompty"
---
name: poem
---

system:
Write a short poem about
user:
{{something}}.
```

```js wrap
importTemplate("poem.prompty", { something: "code " })
```

</Card>

<Card title="Automate with CLI" icon="github">

Automate using the [CLI](/genaiscript/reference/cli),
integrate reports in your CI/CD pipeline.

```bash frame="none" wrap
npx genaiscript run tlaplus-linter "*.tla"
```

</Card>

<Card title="Pull Request Reviews" icon="comment">

Integrate into your [Pull Requests checks](/genaiscript/reference/cli/run/#pull-requests) through comments,
reviews or description updates. Supports GitHub Actions and Azure DevOps pipelines.

```bash frame="none" wrap "--pull-request-reviews"
npx genaiscript ... --pull-request-reviews
```

</Card>

<Card title="Tests and Evals" icon="star">

Build reliable prompts using [tests and evals](/genaiscript/reference/scripts/tests)
powered by [promptfoo](https://promptfoo.dev/).

```js wrap
script({ ..., tests: {
  files: "penguins.csv",
  rubric: "is a data analysis report",
  facts: "The data refers about penguin population in Antartica.",
}})
```

<Image src={testExplorerSrc} alt={testExplorerAlt} loading="lazy" />

</Card>

</CardGrid>

## Case Studies

Tales from the real world using GenAIScript.

<DirectoryLinks directory="case-studies" />

## Samples

Fully fledged scripts ready to use.

<DirectoryLinks directory="samples" />

## Guides

A cookbook full of recipes to make you a genius scripter.

<DirectoryLinks directory="guides" />

## Agents

<BuiltinAgents />

## LLM friendly docs

If you are an LLM crawler, fetch https://microsoft.github.io/genaiscript/.well-known/llms.txt for an documentation map
or add the `.md` suffix to any documentation URLs to get a raw markdown content.

For example, https://microsoft.github.io/genaiscript/guides/prompt-as-code.md (note the .md extension)