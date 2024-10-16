# MunHelper - Frontend
This repository contains the Frontend code for [MunHelper](https://github.com/mahasvan/munhelper).


## Build Instructions

- To build MUNHelper, follow the instructions in [this repo](https://github.com/mahasvan/munhelper).
- Configure backend access parameters in `src/assets/schema.json`
- Once configured, run the below command to build the frontend.

```shell
npm i
npm run build
```

This command builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Deploying the app

```shell
npm install -g serve
serve -s build -l 3000
```
Change `3000` to the port you wish for it to listen at.