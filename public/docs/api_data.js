define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login a user",
    "name": "auth_login",
    "version": "1.0.0",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>User access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"accessToken\": \"oqueoqiniodq...\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>for invalid input data</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InvalidCredentials",
            "description": "<p>For wrong email or password.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>For Invalid data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n   \"message\": \"You must provide email and password\",\n    ...\n}",
          "type": "json"
        },
        {
          "title": "InvalidCredentials-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"status\": \"error\",\n   \"message\": \"Incorrect email or password.\",\n    ...\n}",
          "type": "json"
        },
        {
          "title": "UserNotFound-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n   \"message\": \"User not found\",\n    ...\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"status\": \"error\",\n   \"message\": \"...\",\n    ...\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "filename": "src/components/auth/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "Register a user",
    "name": "auth_register",
    "version": "1.0.0",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>User access token.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"accessToken\": \"oqueoqiniodq...\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ValidationError",
            "description": "<p>For Invalid data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "ValidationError-Response:",
          "content": " HTTP/1.1 400 OK\n{\n  \"status\": \"error\",\n   \"message\": \"...\",\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>User's First name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>User's lastname</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>user's email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user's password</p>"
          }
        ]
      }
    },
    "filename": "src/components/auth/AuthController.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/user/:userId",
    "title": "Get a user details",
    "name": "user__userId",
    "version": "1.0.0",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>userdetails.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n   \"status\": \"success\",\n    \"message\": \"User retrieved successfully.\",\n     \"code\": 200,\n     \"data\": {\n         \"active\": true,\n         \"isVerified\": false,\n         \"_id\": \"5cacc39d97273e4d779d8310\",\n         \"email\": \"johndoe@example.com\",\n         \"firstName\": \"John\",\n         \"lastName\": \"doe\",\n         \"updatedAt\": \"2019-04-09T16:09:01.969Z\",\n         \"createdAt\": \"2019-04-09T16:09:01.969Z\",\n         \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>User's Id</p>"
          }
        ]
      }
    },
    "filename": "src/components/user/UserController.js",
    "groupTitle": "User"
  }
] });
