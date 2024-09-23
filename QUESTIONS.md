# Questions

1. Discuss your strategy and decisions implementing the application. Please, considertime complexity, effort cost, technologies used and any other variable that you understand important on your development process.

    ## Technologies used

    - Backend: I used FastAPI to build the API, ensuring fast and scalable development with excellent support for data validation and automatic documentation via Swagger. FastAPI was chosen because it is an efficient tool for creating APIs, with excellent performance, strong typing, and easy integration with databases.

    - Frontend: On the frontend, I chose to use React with TypeScript, in conjunction with Material UI to ensure a clean and responsive design.

    - Charts: For visualizations, I used Chart.js, which provides interactive and customizable charts with advanced options for displaying complex data.

    ## Time complexity and effort cost

    - The development was planned in phases. The initial phase focused on creating REST endpoints that provide relevant data from legislators and bills based on the CSV files provided.

    - The frontend layer was implemented in parallel with a flexible architecture, using a combination of Grid for layout and Material UI components, ensuring that the interfaces were responsive and adaptable to future changes.

    - The cost of effort was minimized by using mature and well-documented libraries, such as React and FastAPI, which allowed for agile development with a reasonable effort.

    ## Other important variables:

    - Scalability: The backend was designed with Clean Architecture concepts in mind, clearly separating the domain layer, services and controllers, allowing for easy extension and maintenance. This ensures that new functionalities can be added without deep refactorings.

    - Data flexibility: The decision to work with CSVs was initially made based on the data format provided, but the project architecture was designed to allow future integration with other data sources (such as external APIs or databases).


2. How would you change your solution to account forfuture columns that might be
requested, such as “Bill Voted On Date” or“Co-Sponsors”?

    - Flexibility in data structure: Currently, the backend consumes and processes CSV files to display information about legislators and bills. If new columns are introduced (such as “Bill Voted on Date” or “Co-Sponsors”), the backend structure can be easily adjusted to include these new fields in the data transformation services. The code is organized in a modular way, so adding a new column to the API response or processing it will be a simple and isolated change.


    - The frontend can be easily adapted to display new columns in charts and tables. Using React and Material UI, new columns can be dynamically added to the table component (such as BillsTable) without having to refactor existing components.

    - To display data such as “Bill Voted on Date”, we could add a new column to the table or create a line chart that shows the number of bills voted on by date. The flexibility of Chart.js will allow for easy addition of new charts without the need for major changes to the code structure.


    - Since the backend is implemented using FastAPI with a modular approach, it can easily support new columns. If new data is introduced in CSV or another data source, simply update the data model and the services that process it. This keeps the code clean and ready for new changes.

    - In terms of persistence, when using a relational database, these columns can be added directly to the data model without the need for major refactoring.

3. How would you change your solution if instead of receiving CSVs of data, you were given a list of legislators or bills that you should generate a CSV for?

    - If the situation changes and instead of consuming CSVs, the system needs to generate CSVs from provided lists of legislators or bills, the logic can be reversed in the backend. The backend would have to build endpoints to receive the lists of data in a structured format (JSON or similar). From these lists, the backend would use libraries like pandas or Python's native csv to process the data and generate the CSVs. FastAPI can easily provide the generated files as a response for download or submission via API.

    - I would create an endpoint in the backend that receives the list of legislators or bills, processes this data into a DataFrame or directly into a CSV structure, and generates the CSV file. FastAPI can be used to generate the file and return the generated CSV to the frontend. On the frontend, a "Download CSV" functionality could be implemented to allow the user to download the generated files.

4. How long did you spend working on the assignment?

    - I spent about 7 hours