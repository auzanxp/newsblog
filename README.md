<div align="center">
  <h3 align="center">Top News</h3>

  <p align="center">
    An repository Forntend Challenge - News API.
    <br />
    <a href="https://newsapi.org/"> Api</a>
    ·
    <a href="https://ant.design/">Ant Design & Emotion</a>
  </p>
</div>

## Install

```bash
1. clone this repo
2. cd to repo
4. Rename the .env.example file to .env
5. Replace the YOUR_API_KEY placeholder in the .env file with your actual API key.
6. npm run dev to development project
7. npm install
```

## Testing

```bash
1. npm run test
2. npm run coverage
```

Unit Test Framework using [`vitest`](https://vitest.dev/) and [`React Testing Library`](https://testing-library.com/docs/react-testing-library/intro/)

## Git usage guidelines

### Git Message

1. start with prefix [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test] [type-enum], in the body put the issue ID, followed by colon
2. describing the key change introduced by commit
3. limit the subject line to 50 characters
4. if necessary, add the body part to describe the details

```
Examples:
feat: add .gitignore
fix: fix container page add user.
```

## Merge Request

Merge request title must follow convention. No. issue - Title ticket or Short description.
Example: T12345 - Add login page

For merge request description please use merge request template and fill the section properly.

## Styling

_[`AntDesign`](https://ant.design/)
_[`Emotion`](https://emotion.sh/docs/introduction)
For styling please use antDesign and create a file to store css and use BEM http://getbem.com/introduction/ style for name convention.
