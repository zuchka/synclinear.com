# Contributing to SyncLinear.com

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- Before jumping into a PR be sure to search [existing PRs](https://github.com/calcom/synclinear.com/pulls) or [issues](https://github.com/calcom/synclinear.com/issues) for an open or closed item that relates to your submission.

## Developing

The development branch is `main`. This is the branch that all pull requests should be made against. The changes on the `main` branch are tagged into a release monthly.

To develop locally:

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your
   own GitHub account and then
   [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch:

    ```sh
    git checkout -b MY_BRANCH_NAME
    ```

3. Install the dependencies:

    ```sh
    pnpm install
    ```

4. Start developing and watch for code changes:

    ```sh
    pnpm dev
    ```

## Building

You can build the project with:

```bash
pnpm build
```

Please be sure that you can make a full production build before pushing code.

## Testing

More info on how to add new tests coming soon.

## Linting

To check the formatting of your code:

```sh
pnpm lint
```

If you get errors, be sure to fix them before committing.

## Making a Pull Request

- Be sure to [check the "Allow edits from maintainers" option](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork) while creating you PR.
- If your PR refers to or fixes an issue, be sure to add `refs #XXX` or `fixes #XXX` to the PR description. Replacing `XXX` with the respective issue number. Se more about [Linking a pull request to an issue
    ](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue).
- Be sure to fill the PR Template accordingly.

## Architecture

This app has two major components: a "webhook consumer" and a web UI for auth.

The [webhook consumer](/pages/api/index.ts) is a single endpoint that receives webhooks from Linear and GitHub then decides what to do.

Data such as GitHub repos, synced issues, and usernames are persisted in PostgreSQL. This is the current data model, as specified in the [schema](/prisma/schema.prisma):

![image](https://user-images.githubusercontent.com/36117635/198146657-b37d3eee-c747-4aef-945f-b5ddac984063.png)
