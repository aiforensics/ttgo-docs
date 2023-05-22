# `ttgo` documentation

### Target audiences

1. People that want to consult `TikTok global observatory` documentation: please check [in our dedicated page](https://ttgo.trex.zone/docs).
2. AI Forensic sysadmin: in this repository you can find an updated folder of `htmls` files that should be served statically from our server in `demo/build`. It should be served via NGINX as a static folder.
3. People that wants to contribute to the documentation, please look at the folder `node_modules/demo`.
4. People confused by this package: please check the original repository, this is a fork meant to customize the content.

---

## Technical Overview

The `docusaurus-plugin-openapi-docs` package extends the Docusaurus CLI with commands for generating MDX using the OpenAPI specification as the source. The resulting MDX is fully compatible with [plugin-content-docs](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs) and can be used to render beautiful reference API docs by setting `docItemComponent` to `@theme/ApiItem`, a custom component included in the `docusaurus-theme-openapi-docs` theme.

Key Features:

- **Compatible:** Works with Swagger 2.0 and OpenAPI 3.0.
- **Fast:** Convert large OpenAPI specs into MDX docs in seconds. 🔥
- **Stylish:** Based on the same [Infima styling framework](https://infima.dev/) that powers the Docusaurus UI.
- **Capable:** Supports single, multi and _even micro_ OpenAPI specs.

## What we did to arrive here

After [forking](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/fork) the main repository, run the following:

```bash
git clone https://github.com/<your account>/docusaurus-openapi-docs.git
cd docusaurus-openapi-docs
yarn
yarn build-packages
yarn watch:demo
```
