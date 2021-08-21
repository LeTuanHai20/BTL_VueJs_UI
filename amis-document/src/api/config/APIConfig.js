var APIConfig = {
    development: 'https://localhost:44314/api/v1/',
    production: 'local:8081'
}

export default APIConfig[process.env.NODE_ENV];