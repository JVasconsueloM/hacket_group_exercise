# Stage 2: Setup Django environment
FROM python:3.10 AS build-django

WORKDIR /app/backend

COPY ./hacket_group_exercise_back/requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY ./hacket_group_exercise_back .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
