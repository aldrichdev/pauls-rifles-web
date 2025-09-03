# pauls-rifles-web

Future website for the =PRC= clan of Call of Duty 1.

# Developer Notes

## Flicker when switching between pages

This is an issue that only occurs in the dev build, it does not occur if you run Next.js in production mode. It's flickering to black because we `return null` in `AppWrapper`, which we have to do when using the `next-themes` library because we will see hydration mismatch errors if we don't. It flickers to black if the user is on the black theme, or to white if the user is on the light theme. We must `return null`, instead of returning some JSX element, or we will get yet another error, `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up.`
