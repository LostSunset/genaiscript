---
title: Security and Trust
sidebar:
    order: 99
---

We discuss various security risks and possible mitigations when using GenAIScript.
GenAISCript inherits the same security risks as running scripts, and adds some new threats due to the nature of the LLM-generated outputs.

## Don't trust the scripts

Since the GenAIScript files `.genai.js` are executable JavaScript files and are in fact using a JavaScript runtime (VSCode or Node). It is important to understand that the script can do anything that JavaScript can do. This includes reading and writing files, making network requests, and executing JavaScript arbitrary code.

:::caution

Do not run `.genai.js` scripts from untrusted sources.

:::

## Don't trust the LLM Outputs

A trusted script might use malicious files form the context to generate a malicious output.
For example, overriding files in the project with new malicious code.

:::caution

Always validate the output of a LLM generation.

:::

- in Visual Studio Code, use the refactoring preview
- in your CI/CD, create a pull request with the changes and review them

## Visual Studio Code Workspace Trust

The extension is not **disabled** when opening a folder in [Restricted Mode](https://code.visualstudio.com/docs/editor/workspace-trust) in Visual Studio Code.