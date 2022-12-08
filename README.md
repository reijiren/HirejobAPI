<br />
<p align="center">

  <h3 align="center">Hirejob API</h3>
  <p align="center">
    <image align="center" width="200" src='./assets/' />
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [Related Project](#related-project)



<!-- ABOUT THE PROJECT -->
## About The Project

Hirejob API is a RESTful API used in [PeWorld Hirejob Aplication](https://github.com/reijiren/HirejobAPP). This API handles every functions in Hirejob Application, such as login & register for workers & recruiters, update profile, search user by skill, insert portfolio and insert job experiences.

### Built With

* [Node JS](https://nodejs.org/en/docs/)
* [Express JS](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of things you need to use the application and how to install them.

* [node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
```sh
git clone https://github.com/reijiren/HirejobAPI.git
```
2. Install NPM packages
```sh
npm install
```
3. Add .env file at your root folder project, and add the following
```sh
DB_USERNAME = your_db_username
DB_HOST = your_db_host
DB_DATABASE = your_db_database_name
DB_PASSWORD = your_db_password
DB_PORT = your_db_port
PORT = 3001
JWT_SECRET = your_token_secret

```




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request



<!-- RELATED PROJECT -->
## Related Project
PeWorld Hirejob application
* [PeWorld Hirejob Application](https://github.com/reijiren/HirejobAPP)
