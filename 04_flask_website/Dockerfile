FROM python:3.7.5-slim-buster
RUN apt-get -y update
RUN apt-get -y install git
MAINTAINER Robert Erick <robert.erick.2@gmail.com>
ENV INSTALL_PATH /website
RUN mkdir -p $INSTALL_PATH
WORKDIR $INSTALL_PATH
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt
RUN pip install beautifulsoup4
RUN pip install git+https://github.com/ranaroussi/yfinance.git
COPY . .
#CMD gunicorn -b 0.0.0.0:8080 --access-logfile - "website.app:create_app()"
#CMD 0.0.0.0:8080 --access-logfile - "website.app:create_app()"
ENTRYPOINT [ "python" ]
CMD ["website/app.py" ]
