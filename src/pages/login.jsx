export const Login = () => {
	return (
		<>
			<div className="login-wrapper">
				<div class="form-signin w-100 px-5 m-auto form-container">
					<form>
						<div class="mb-4 image-container-form" />
						<h1 class="h3 mb-3 fw-normal">Please sign in</h1>

						<div class="form-floating">
							<label for="floatingInput">Email address</label>
							<input
								type="email"
								class="form-control"
								id="floatingInput"
								placeholder="name@example.com"
							/>
						</div>
						<div class="form-floating">
							<label for="floatingPassword">Password</label>
							<input
								type="password"
								class="form-control"
								id="floatingPassword"
								placeholder="Password"
							/>
						</div>

						<button class="w-100 btn btn-lg btn-primary" type="submit">
							Sign in
						</button>
						<p class="mt-5 mb-3 text-muted">&copy; 2023 Hackathon</p>
					</form>
				</div>
			</div>
		</>
	);
};
