def create
  @passwordless_login = Auth0::Client.new(
    email: params[:passwordless_login][:email],
    connection: 'email',
    send: 'link'
  )

  if @passwordless_login.success?
    redirect_to root_path, notice: 'Login link sent successfully'
  else
    redirect_to root_path, alert: 'There was an error sending the login link'
  end
end