# Learn Note [![Build Status](https://travis-ci.com/morgannewman/learn-note.svg?branch=master)](https://travis-ci.com/morgannewman/learn-note)

Table of Contents
=================

* [Architecture Overview](#Architecture-Overview)
* [App](#app)
  * [Folder Naming Convention](#Folder-Naming-Convention)
  * [Folder Structure](#Folder-Structure)
  * [File Structure](#File-Structure)
* [Controller](#Controller)
  * [Actions](#Actions)
  * [Reducers](#Reducers)

---

## Architecture Overview
The goal of this architecture is to be extensible, modular, and consistent. In a codebase with 4 potential contributors, I believe the ease of maintenance over time is worth the added complexity.

The front-end is divided into 2 broad layers: `app` and `controller`. 

---

### App

The purpose of `app` is to house React and all view logic. Most of these components should defer state to Redux, but it is okay for local state to be maintained for trivial states (e.g. the state of a form before it is submitted).

#### Folder Naming Convention

All component folders should be capitalized according to their corresponding React component name, so the component `Foo`is housed in `app/Foo/`.

#### Folder Structure

`app/App.js` is the entrypoint for the entire application. This is the level that top-level routing occurs. Any top-level route (e.g. _foo_ in `domain.com/foo/bar` but NOT _bar_) should be routed at this level.

All top-level routes will should have their own folder within `app`. 

Any child routes of a top-level route should be nested in their own folder. For example, given the route `domain.com/foo/bar`, the folder structure would be `app/Foo/Bar`.

If a component is not routed in any way, it should be in the same folder as whichever routed component is its parent.

#### File Structure

Most components, especially components with routes, should operate as stateful container components. In other words, the job of `<Foo />` is to maintain state and pass it to (mostly) pure childen. This pattern is called _container components_, and they are vital to writing extensible React components.

These container components should be defined in the root of the component folder in an `index.js`. 

This means the component `<Foo />` will be the default export of `app/Foo/index.js`, and it can be imported into other files by simply referencing the folder `import Foo from ./app/Foo;`

Remember: importing a folder is a shortcut for importing `index.js` within that folder.

---

### Controller

The controller houses the redux layer of the application. This is where all communication with the backend and meaningful state changes should occur.

#### Actions

Actions should be defined in the `controller/actions` folder, with a file corresponding to the reducer that is primarily responsible for handling the action.

For example, the actions for authentication are housed in `controller/actions/auth.js`, and the corresponding reducer is located in `controller/reducers/auth.js`.

All actions should have:

1. A const name denoted in all caps and namespaced beginning with their reducer. For example, any auth action should be namespaced to begin with "`AUTH_`" followed by the action name.

2. All actions must have a corresponding camelCase action creator function. this should be the same name as the action const, but be camelcased instead of const-cased. For example, the action creator for `AUTH_SUBMIT` is `authSubmit`

All asyncronous actions should:

1. Use Redux-Thunk.

2. Use 3 actions corresponding to the 3 possible states of an asynchronous call: submitting, success, and failure.

3. Be namespaced with `submit` followed by a generic action name. For example, the asynchronous action for logging in is `submitAuthLogin`. This name conveys 3 things: 

    i. via `submit`, it is an asynchronous action;

    ii. it is part of the `auth` group of actions/reducer;

    iii. the purpose of the async call (i.e. logging in).


#### Reducers

Reducers divide the global state into logical groupings. They are located in `auth/reducers`. Because there will be multiple reducers, they are combined in `reducers/index.js`.

Actions for each reducer can be found in the action folder sharing the same name as the reducer.

Reducers should manipulate state using immer.

Immer is extremely simple; following `reducers/auth.js` as an example, we can either (1) mutate the state without bothering to copy the previous state, returning _nothing_ (this is important), or (2) return _something_, where _something_ will become the new state.

Usually you want to simply modify the state, but an example of (2) would be resetting the state, as I do in `AUTH_ERROR` in `reducers/auth.js`.
