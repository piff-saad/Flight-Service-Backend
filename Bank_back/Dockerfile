FROM python:3.8
WORKDIR /app/
RUN pip install Django djangorestframework
ADD ./ ./
ENTRYPOINT ["/bin/sh", "-c" , "python manage.py runserver 0.0.0.0"]
