# MunHelper - Frontend
This repository contains the Frontend code for [MunHelper](https://github.com/mahasvan/munhelper).


## Prerequisites
- Make sure Node is installed
- You need to have an instance of MUNHelper running. 
- Create a `.env` file at the project root with the following parameters. (Change the URLs according to your configuration)
    ```json
    PORT=3000
    REACT_APP_SEARCH_RESOS_URL="http://localhost:5001/search/ecosoc-resolutions?query="
    REACT_APP_CHAT_RESOS_URL="http://localhost:5001/chat/ecosoc-resolutions?query="
    ```

## Build Instructions - Docker
- To build MUNHelper, follow the instructions in [this repo](https://github.com/mahasvan/munhelper).
- Configure the .env file as previously described.
- Once configured, build and run the frontend container like so.

```shell
docker build -t mahasvan/munhelper-frontend:latest .
```
To run the built container:
```shell
docker run -p 3000:3000 --name MunHelperFrontend mahasvan/munhelper-frontend:latest
```

### Changing the port the app listens on
- Change the `-p 3000:3000` part of the command like so.
- If you want the app to listen on port 8888, change it to `-p 8888:3000`
- This maps port 3000 inside the container, to port 8888 in the host machine.
- DO NOT change the `3000` after the `:`. 

## Build Instructions - Bare Metal

> [!WARNING]  
> Use this method only if you have to. It is recommended to use Docker to host the app.

- To build MUNHelper, follow the instructions in 
- Configure backend access parameters in the `.env` file - Refer [the MUNHelper repository](https://github.com/mahasvan/munhelper).
- Once configured, run the below command to build the frontend.

```shell
npm i
npm run build
```

This command builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Deploying the app

```shell
npm install -g serve
serve -s build -l 3000
```
Change `3000` to the port you wish for it to listen at.

## Building for Development
- Make sure you have Node installed.
- Use the following commands to make code changes and test without containerization.
    ```shell
    git clone https://github.com/Mahasvan/munhelper-frontend
    cd munhelper-frontend
    # Configure the `.env` file
    npm i
    npm start
    ```
- The app is now listening at [`http://localhost:3000`](http://localhost:3000)
- To change the port that the app listens on, change the `PORT` variable in the `.env` file at the project root directory.