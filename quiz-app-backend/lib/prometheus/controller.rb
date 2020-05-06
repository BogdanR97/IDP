module Prometheus
    module Controller
  
      # Create a default Prometheus registry for our metrics.
      prometheus = Prometheus::Client.registry
  
      # Create a simple gauge metric.
      GAUGE_QUIZ = Prometheus::Client::Gauge.new(:gauge_quiz, docstring: 'Number of quizzes created by all users', labels: [:quizzes])

      GAUGE_USER = Prometheus::Client::Gauge.new(:gauge_user, docstring: 'Number of users added by admin', labels: [:users])
  
      prometheus.register(GAUGE_QUIZ)
      prometheus.register(GAUGE_USER)
  
    end
  end
  