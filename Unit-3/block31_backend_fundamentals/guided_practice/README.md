# Express Routing

## Overview

In this guided practice, we will start building a RESTful API with Express. We will be using the Fetch API to make requests to our API.

Begin by cloning this repo, then run `npm install` to install the dependencies, and then `npm start` to start the server. Your server should be running at `http://localhost:8080`.

## Anatomy of GET Request

A URL (Uniform Resource Locator) request is a way to identify and locate resources on the internet. The anatomy of a URL request typically consists of several parts:

The Protocol: This is the first part of a URL and indicates the protocol used to access the resource, such as "http" or "https".

The Domain Name: The domain name is the next part of the URL, and it specifies the location of the server that holds the resource being requested. This is typically a domain name, such as "www.example.com".

The Path: This part of the URL specifies the location of the resource within the server's file structure. It follows the domain name, and it can include multiple levels of subdirectories and files.

The Query String: This is an optional part of a URL that allows you to pass additional information to the server. It typically starts with a "?", and contains a series of key-value pairs separated by "&".

The Fragment Identifier: This is an optional part of the URL that specifies a location within the resource being requested. It starts with "#" and allows linking to a specific place within a webpage.

An example of a URL request would be:

http://www.example.com/path/to/resource?key1=value1&key2=value2#fragment

Where:

The protocol is "http"
The domain name is "www.example.com"
The path is "/path/to/resource"
The query string is "?key1=value1&key2=value2"
The fragment identifier is "#fragment"
It's worth noting that this is a general explanation of the anatomy of a URL request, some variations may exists depending on the specific use case.