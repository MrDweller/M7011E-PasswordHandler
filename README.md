# M7011E-PasswordHandler_FrontEnd
A secure password handler, that can store your passwords in a sql database. All passwords will be encrypted and to access them a master password will be used.

## Prerequisites
The code was developed with the folowing programs and versions,

- node v16.17.0
- npm 8.15.0

Any later version sould also work.

## Installation
Clone the repo then in the *password-handler* folder run,

```
npm install
```

## Running
In the *password-handler* folder run the command,
```
npm start
```

## Config
To change the address and port of the frontend, open the *RestRequest.js* file located in *password-handler/src/backend_communication/RestRequest.js*
and change the host and port constants.
