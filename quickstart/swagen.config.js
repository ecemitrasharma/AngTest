module.exports = {
    api: {
        // Location of the Swagger JSON 
        url: 'http://localhost:58754/swagger/docs/v1',
 
        // Location of the generated file 
        output: './src/my/my.services.ts',
 
        // Generator to use 
        // This is the name of the generator package without the swagen- prefix. 
        generator: 'ng2-http',
 
        // Optional mode, if the generator supports multiple modes. 
        mode: 'typescript',
 
        // Options to change identifiers in the generated code 
        // Transforms can be predefined names like camelCase or functions with custom logic 
        transforms: {
            serviceName: function(name, details) {
                // Example: Remove the prefix 'api' from the service name 
                return name.replace(/^api(\w+)$/, '$1');
            },
            operationName: 'camelCase',
            modelName: 'pascalCase',
            propertyName: undefined
        },
 
        // Options specific to the generator package and selected mode. 
        options: {
            moduleName: 'common',
            baseUrl: {
                provider: 'Config',
                variable: 'config',
                path: ['apiBaseUrl']
            },
            namespaces: {
                services: 'app.webservices',
                models: 'app.webservices'
            },
            references: [
                '../../../../typings/index.d.ts',
                '../../../../typings/app.d.ts'
            ]
    }
}}