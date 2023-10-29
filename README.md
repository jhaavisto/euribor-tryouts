# Current Euribor Interest Rates

This is a React application that fetches the current Euribor interest rates and displays them on the page.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Fetches current Euribor interest rates via API, I'm using [API Ninjas](https://api-ninjas.com/api/interestrate)
- Displays the rates for "3 Months", "6 Months", and "12 Months"
- Mobile responsive design
- Styled with Styled-components

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2. **Navigate to Project Directory**

    ```bash
    cd your-repo-name
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

### Configuration

1. Create a `.env` file in the root directory and add your API key, you can get that by signing up at API Ninjas:

    ```
    REACT_APP_EURIBOR_API_KEY=your_api_key_here
    ```

## Usage

To start the development server:

```bash
npm start
```

Navigate to http://localhost:3000 to view the app.

## Contributing

If you wish to contribute, please create an issue to discuss the changes or open a pull request.

## License
This project is licensed under the MIT License.
