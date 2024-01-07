#!/bin/bash

if [-d "env"]
then
    echo "Python Virtual Environment Exists"
else
    python3 -m venv env
fi

echo $PWD
source env/bin/activate
pip3 install -r requirements.txt

if [-d "logs"]
then
    echo "Log Folder Exists"
else
    mkdir logs
    touch logs/error.log logs/access.log
fi

sudo chmod -R 777 logs
echo "envsetup finishes"