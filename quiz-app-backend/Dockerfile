FROM ruby:2.5.1
RUN mkdir /quiz-app
WORKDIR /quiz-app
COPY Gemfile /quiz-app/Gemfile
COPY Gemfile.lock /quiz-app/Gemfile.lock
RUN bundle install
COPY . /quiz-app

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]