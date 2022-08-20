FROM python:3.9.12

WORKDIR /backend

COPY req.txt req.txt

RUN pip3 install -r req.txt

COPY . .

WORKDIR /backend/drf_backend

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]