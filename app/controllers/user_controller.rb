class UserController < ActionController::Base

  def search
    users = User.all
    render json: users
  end

end