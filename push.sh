#!/bin/bash

docker build -t jomartz/olaf-linscheid:v0.1 . --no-cache
docker image push jomartz/olaf-linscheid:v0.1