# Step by step guide to running the application locally


## Pré-requisitos:
 - Node.js
 - Python 3.8+
 - Git

## Steps:

1. Clone the Repository

    First you must clone the repository or download it

    ``` bash
    git clone https://github.com/seu-usuario/project_quorum_legislative_data.git
    ```

2. Configure and Run the Backend (FastAPI)

    2.1. Navegue até a pasta do backend

    Após clonar o projeto, navegue até a pasta do backend com o seguinte comando:

    ``` bash
    cd project_quorum_legislative_data/backend
    ```

    2.2. Create and activate a Python virtual environment

    To ensure that your project dependencies do not conflict with other Python package installations on your system, it is recommended that you create a virtual environment.

    ``` bash
    python -m venv venv
    venv\Scripts\activate
    ```
    2.3. Install the backend dependencies

    With the virtual environment activated, install all the project dependencies listed in the `requirements.txt` file.

    ``` bash
    pip install -r requirements.txt
    ```
    2.4. Run the FastAPI server

    After installing the dependencies, the server can be started with the following command:

    ``` bash
    uvicorn app.main:app --reload
    ```
    This will start the FastAPI server on the default port 8000 (http://127.0.0.1:8000/).

    You can check out the interactive API documentation by going to http://127.0.0.1:8000/docs.

3. Configure and Run the Frontend (React + TypeScript)

    3.1. Navigate to the frontend folder

    In a new terminal window or in the same terminal (after navigating back to the root directory), navigate to the frontend folder:

    ``` bash
    cd ../frontend
    ```

    3.2. Install the frontend dependencies

    With Node.js already installed, the next step is to install all the frontend dependencies. Run the command below:

    ``` bash
    npm install
    ```

    This command will download and install all the libraries and packages required for the frontend project.

    3.3. Start the frontend development server

    After installing the dependencies, start the React development server with the following command:

    ``` bash
    npm start
    ```
    This will start the frontend on the default port 3000. The frontend will be accessible at: http://localhost:3000.