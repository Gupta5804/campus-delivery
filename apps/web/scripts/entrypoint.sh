#!/bin/bash

APP_PORT=${PORT:-8000}
/opt/venv/bin/python manage.py collectstatic --noinput --clear
/opt/venv/bin/python manage.py makemigrations --noinput
/opt/venv/bin/python manage.py migrate --noinput
/opt/venv/bin/python manage.py superuser || true
/opt/venv/bin/gunicorn --worker-tmp-dir /dev/shm backend.wsgi:application --bind "0.0.0.0:${APP_PORT}"