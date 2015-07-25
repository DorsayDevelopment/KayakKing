# Start with angular node grunt bower setup
FROM brymastr/angular:latest

# Add to working dir
WORKDIR /src
COPY . /src/

# install dependencies
RUN     npm install
RUN     bower install --allow-root
RUN     sudo apt-get -y install ruby-full
RUN     sudo gem install sass
RUN     grunt build

# Run application
EXPOSE  80
CMD ["nodemon", "server.js"]