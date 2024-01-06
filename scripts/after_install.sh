#!/usr/bin/env bash

# kill any servers that may be running in the background 
sudo pkill -f runserver

# kill frontend servers if you are deploying frontend
# sudo pkill -f tailwind
# sudo pkill -f node

cd /home/ubuntu/django-campusdelivery/

# activate virtual environment
python3 -m venv venv
source venv/bin/activate

#install requirements.txt
pip install -r /home/ubuntu/django-campusdelivery/requirements.txt
python3 manage.py makemigrations 
python3 manage.py migrate

#gunicorn 
sudo cp /home/ubuntu/django-campusdelivery/gunicorn/gunicorn.socket  /etc/systemd/system/gunicorn.socket
sudo cp /home/ubuntu/django-campusdelivery/gunicorn/gunicorn.service  /etc/systemd/system/gunicorn.service

sudo systemctl start gunicorn.service
sudo systemctl enable gunicorn.service

#nginx

sudo systemctl daemon-reload
#systemctl restart gunicorn.service
sudo rm -f /etc/nginx/sites-enabled/default

sudo cp /home/ubuntu/django-campusdelivery/nginx/nginx.conf /etc/nginx/sites-available/django-campusdelivery
sudo ln -sf /etc/nginx/sites-available/django-campusdelivery /etc/nginx/sites-enabled/
#sudo ln -s /etc/nginx/sites-available/blog /etc/nginx/sites-enabled
sudo nginx -t
sudo gpasswd -a www-data ubuntu
sudo systemctl restart nginx

echo $SECRET_KEY
echo $DATABASE_URL
echo $DEBUG
echo $ALLOWED_HOSTS
# run server
screen -d -m python3 manage.py runserver 0:8000