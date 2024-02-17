import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import makeAxiosReq from '../../apis/makeAxiosReq';

const UserDetailsRightSide = () => {
	const { user } = useAuth();
	const [fileNames, setFileNames] = useState('');

	const handleSubmitCSV = (e) => {
		e.preventDefault();
		const uploadFileObj = { fileNames };
		makeAxiosReq
			.post('example-url.com', uploadFileObj)
			.then((res) => console.log(res))
			.catch((err) => console.error(err));
	};

	return (
		<div className="col-lg-8">
			<div className="card">
				<div className="card-body">
					<div className="row mb-3">
						<div className="col-sm-3">
							<h6 className="mb-0">Full Name</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							<input type="text" className="form-control" value={user.name} aria-label="username" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-3">
							<h6 className="mb-0">Email</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							<input type="text" className="form-control" value={user.email} aria-label="useremail" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-3">
							<h6 className="mb-0">Phone</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							<input type="text" className="form-control" value={user.phone} aria-label="userphone" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-3">
							<h6 className="mb-0">Mobile</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							<input type="text" className="form-control" value={user.phone} aria-label="usermobile" />
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-3">
							<h6 className="mb-0">Address</h6>
						</div>
						<div className="col-sm-9 text-secondary">
							<input
								type="text"
								className="form-control"
								value={`${user.address.street} ${user.address.suite} ${user.address.city}`}
							/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-3"></div>
						<div className="col-sm-9 text-secondary">
							<input type="button" className="btn btn-primary px-4" value="Save Changes" />
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-sm-12">
					<div className="card">
						<div className="card-body">
							<h5 className="d-flex align-items-center mb-3">Upload you CSV file here.</h5>
							<div className="form-group">
								<div class="input-group mb-3">
									<input
										type="file"
										class="form-control"
										id="inputGroupFile03"
										aria-describedby="inputGroupFileAddon03"
										aria-label="Upload"
									/>
									<button
										class="btn btn-outline-secondary"
										type="button"
										id="inputGroupFileAddon03"
										onClick={handleSubmitCSV}
									>
										Upload
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsRightSide;
