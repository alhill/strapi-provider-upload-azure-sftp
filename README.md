# Double Strapi Provider Upload Azure Storage and SFTP

Strapi plugin for file uploading to Azure storage and SFTP.

### Installing

Inside your strapi project run the following

```sh
yarn add strapi-provider-upload-azure-sftp

# or

npm install strapi-provider-upload-azure-sftp
```

You will need to extend the file model for having two URL keys, url and urlAzure.
For this, copy the File.settings.json from node_modules/strapi-plugin-upload/models to extensions/upload/models and add urlAzure to the attribute list
```
  ...
    "url": {
      "type": "string",
      "configurable": false,
      "required": true
    },
    "urlAzure": {
      "type": "string",
      "configurable": false
    },
  ...
```

## Usage

### Strapi version >= 3.0.0

With a stable release of Strapi 3.0.0, the configuration was moved to a JavaScript file. Official documentation [here](https://strapi.io/documentation/v3.x/plugins/upload.html#using-a-provider).

To enable the provider, create or edit the file at ```./config/plugins.js```.

This is an example plugins.js file for Azure storage:
```JavaScript
module.exports = ({ env }) => ({
  upload: {
    provider: 'azure-sftp',
    providerOptions: {
      //AZURE CONFIG
      account: CSTORAGE_ACCOUNT'),
      accountKey: env('STORAGE_ACCOUNT_KEY'),
      serviceBaseURL: env('STORAGE_URL'),
      containerName: env('STORAGE_CONTAINER_NAME'),
      defaultPath: 'files',
      maxConcurrent: 10
      //SFTP CONFIG
      host: env('HOST'),
      port: env('PORT'),
      user: env('USER'),
      password: env('PASSWORD'),
      basePath: env('BASE_PATH'),
      baseUrl: env('BASE_URL')
    }
  }
});
```

`serviceBaseURL` is optional, it is useful when connecting to Azure Storage API compatible services, like the official emulator [Azurite](https://github.com/Azure/Azurite/). `serviceBaseURL` would then look like `http://localhost:10000/your-storage-account-key`.  
When `serviceBaseURL` is not provided, default `https://${account}.blob.core.windows.net` will be used.

## Authors
* **Al Hill** - *Join both providers for using them together* (https://github.com/alhill)
* **Finnoconsult** - *SFTP provider* - (https://github.com/finnoconsult)
* **Jake Feldman** - *Azure provider* - (https://github.com/jakeFeldman)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* strapi.io
