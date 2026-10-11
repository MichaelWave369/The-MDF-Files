# THE MDF FILES_

**The truth is in the patch panel. The paperwork is worse.**

An original fictional network-technician horror archive, made for the people doing the work. No trackers, no server, no accounts, no complicated dependencies.

## Open the website

Once the GitHub Pages workflow deploys to main:

https://michaelwave369.github.io/The-MDF-Files/

## Features

- **The Archive:** 70+ original, fictional horror reports covering cursed cable labels, ridiculous service tickets, scope creep, exploitative pay offers, paperwork loops and field encounters. Filter, search, copy and favorite entries.
- **Cursed Label Lab:** Random and custom novelty cable labels, including **TRUST ME BRO** and **MDF RUN?!?!**. Print only as comedy stickers, not production cabling labels.
- **Ticket Roulette:** Generate improbable fictional dispatch tickets.
- **Field Tech Bingo:** Play, reshuffle and locally save an interactive 5×5 board.
- **“Easy Money” Calculator:** Estimate effective pre-tax hourly compensation after travel, paperwork, fees and expenses.
- **Seven-Portal Paperwork Gauntlet:** Survive arbitrary fictional closeout-document rejections.
- **Witness Statements:** Keep fictionalized horror stories in this browser and export them as JSON.

## Privacy and ethics

Every built-in joke is invented. **Do not enter real customer names, addresses, passwords, private work-order numbers, credentials, customer documents, or proprietary information.** User-created stories are saved only to the current browser profile using localStorage and are not uploaded or moderated. Clear browser data and those stories will be lost unless exported. The novelty label print feature is for humor only; production cables must be accurately labeled.

The pay calculator is illustrative and excludes taxes, insurance, equipment depreciation and additional overhead. This independent parody is not affiliated with any specific field-work platform or customer.

## Run locally

The deployed version is completely self-contained in `index.html`. Open it directly in a browser or run a static HTTP server:

```bash
python3 -m http.server 8080
```

## Run tests

With Node.js 22+:

```bash
npm test
```

The test suite checks that all stations exist, the inline JavaScript parses, the archive is populated and privacy disclaimers are present.

## GitHub Pages

The included workflow tests PRs and deploys main after a successful test run. If needed, enable **Settings → Pages → Build and deployment → GitHub Actions**. A merged pull request by itself is not proof of a successful Pages publication. Check the deploy job before sharing the URL.

## Development notes

v1 intentionally publishes as a **single-file static distribution**, adapted from the original modular development project. There is no bundler or external script required at runtime. Future work can move the archive into separate modules and add an opt-in, moderated community submission system. Nothing in this release sends user stories to GitHub.

## License

MIT © 2026 Michael Hughes and contributors.
