# THE HACKETT GROUP - FULLSTACK APP

#### Objective

<span style="color:gray;">
The goal of this exercise is to build a full-stack application with an Angular frontend and a Django backend, integrating with the DataUSA API. The application visualizes two charts: a multi-axis line chart displaying population data and a pie chart displaying vehicle ownership data. The backend should expose a GraphQL API with two resolvers and serve the frontend's static distribution files.
</span>

## Approach

This project follows a modular structure, ensuring separation of concerns between the frontend and backend. The frontend is implemented using Angular and serves two components representing two distinct charts. The backend is implemented in Django and acts as a GraphQL intermediary, connecting to the DataUSA API and serving population and vehicle ownership data.

The application is developed with scalability and maintainability in mind, ensuring that any future modifications to the data sources or frontend can be easily implemented.

## Implementation Details

### Frontend (Angular)

<br><span style="color: #1b75d0">Arquitecture</span>: Clean arquitecture
<br><span style="color: #1b75d0">Framework</span>: Angular 18 (using standalone APIs, without AppModule and signals).
<br><span style="color: #1b75d0">Libraries</span>:

- chart.js and ng2-charts is used for chart rendering.
- apollo-angular is used for GraphQL integration with the backend.

- @ngx-env/builder for manage environment variables (with ci/cd)
- eslint and prettier for code quality

<br><span style="color: #1b75d0">Components (#main)</span>:

- PopulationChartComponent: Displays a multi-axis line chart with population data from Alabama, Florida, and California (2013–2021).
- VehicleOwnershipChartComponent: Displays a pie chart showing US household vehicle ownership distribution for 2021.

<br><span style="color: #1b75d0">Responsiveness</span>:
The application is designed to be responsive, ensuring compatibility across different devices and screen sizes. It uses the Open Sans font as specified in the graphic template.

![Alt pc](./readme-assets/pc.png)

![Alt macbook-air](./readme-assets/Macbook-Air-localhost.png)

![Alt ipad-pro-11](./readme-assets/iPad-PRO-11-localhost.png)

![Alt samsung-galaxy-s20](./readme-assets/Samsung-Galaxy-S20-localhost.png)

![Alt iphone-13-mini](./readme-assets/iPhone-13-Mini-localhost.png)


<br><span style="color: #1b75d0">Services</span>:
#### Backend (Django + GraphQL)
<br><span style="color: #1b75d0">Framework</span>: Django with graphene-django for GraphQL API implementation.
<br><span style="color: #1b75d0">Resolvers</span>:
- Population Data Resolver: Fetches population data for Alabama, Florida, and California for the years 2013–2021.
- Vehicle Ownership Resolver: Retrieves vehicle ownership data for US households in 2021.

<br><span style="color: #1b75d0">Static File Serving</span>: The Angular build output is served via Django at "/" endpoint, allowing the frontend to be accessible from the same server and is configured to support angular routing.
