class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :loggedin?, :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_out
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def loggedin?
    !current_user.nil?
  end

end
