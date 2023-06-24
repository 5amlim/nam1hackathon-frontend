import { Chart } from 'chart.js/auto';
import { useEffect, useMemo, useRef } from 'react';
export const Dashboard = () => {
	feather.replace({ 'aria-hidden': 'true' });
	const chartRef = useRef();

	// Graphs
	// const myChart = useMemo(() => {
	// 	const chartRet = new Chart(chartRef.current, {
	// 		type: 'line',
	// 		data: {
	// 			labels: [
	// 				'Sunday',
	// 				'Monday',
	// 				'Tuesday',
	// 				'Wednesday',
	// 				'Thursday',
	// 				'Friday',
	// 				'Saturday',
	// 			],
	// 			datasets: [
	// 				{
	// 					data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
	// 					lineTension: 0,
	// 					backgroundColor: 'transparent',
	// 					borderColor: '#007bff',
	// 					borderWidth: 4,
	// 					pointBackgroundColor: '#007bff',
	// 				},
	// 			],
	// 		},
	// 	});
	// 	return chartRet;
	// }, []);
	// useEffect(() => {
	// 	const chartRet = new Chart(chartRef.current, {
	// 		type: 'line',
	// 		data: {
	// 			labels: [
	// 				'Sunday',
	// 				'Monday',
	// 				'Tuesday',
	// 				'Wednesday',
	// 				'Thursday',
	// 				'Friday',
	// 				'Saturday',
	// 			],
	// 			datasets: [
	// 				{
	// 					data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
	// 					lineTension: 0,
	// 					backgroundColor: 'transparent',
	// 					borderColor: '#007bff',
	// 					borderWidth: 4,
	// 					pointBackgroundColor: '#007bff',
	// 				},
	// 			],
	// 		},
	// 	});
	// });
	// eslint-disable-next-line no-unused-vars

	return (
		<>
			<header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
				<a className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">
					Company name
				</a>
				<button
					className="navbar-toggler position-absolute d-md-none collapsed"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#sidebarMenu"
					aria-controls="sidebarMenu"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<input
					className="form-control form-control-dark w-100 rounded-0 border-0"
					type="text"
					placeholder="Search"
					aria-label="Search"
				/>
				<div className="navbar-nav">
					<div className="nav-item text-nowrap">
						<a className="nav-link px-3" href="#">
							Sign out
						</a>
					</div>
				</div>
			</header>

			<div className="container-fluid">
				<div className="row">
					<nav
						id="sidebarMenu"
						className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
					>
						<div className="position-sticky pt-3 sidebar-sticky">
							<ul className="nav flex-column">
								<li className="nav-item">
									<a className="nav-link active" aria-current="page" href="#">
										<span
											data-feather="home"
											className="align-text-bottom"
										></span>
										Dashboard
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="file"
											className="align-text-bottom"
										></span>
										Orders
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="shopping-cart"
											className="align-text-bottom"
										></span>
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="users"
											className="align-text-bottom"
										></span>
										Customers
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="bar-chart-2"
											className="align-text-bottom"
										></span>
										Reports
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="layers"
											className="align-text-bottom"
										></span>
										Integrations
									</a>
								</li>
							</ul>

							<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
								<span>Saved reports</span>
								<a
									className="link-secondary"
									href="#"
									aria-label="Add a new report"
								>
									<span
										data-feather="plus-circle"
										className="align-text-bottom"
									></span>
								</a>
							</h6>
							<ul className="nav flex-column mb-2">
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="file-text"
											className="align-text-bottom"
										></span>
										Current month
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="file-text"
											className="align-text-bottom"
										></span>
										Last quarter
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="file-text"
											className="align-text-bottom"
										></span>
										Social engagement
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<span
											data-feather="file-text"
											className="align-text-bottom"
										></span>
										Year-end sale
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
						<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
							<h1 className="h2">Dashboard</h1>
							<div className="btn-toolbar mb-2 mb-md-0">
								<div className="btn-group me-2">
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary"
									>
										Share
									</button>
									<button
										type="button"
										className="btn btn-sm btn-outline-secondary"
									>
										Export
									</button>
								</div>
								<button
									type="button"
									className="btn btn-sm btn-outline-secondary dropdown-toggle"
								>
									<span
										data-feather="calendar"
										className="align-text-bottom"
									></span>
									This week
								</button>
							</div>
						</div>

						<canvas
							className="my-4 w-100"
							id="myChart"
							width="900"
							height="380"
							ref={chartRef}
						></canvas>

						<h2>Section title</h2>
						<div className="table-responsive">
							<table className="table table-striped table-sm">
								<thead>
									<tr>
										<th scope="col">#</th>
										<th scope="col">Header</th>
										<th scope="col">Header</th>
										<th scope="col">Header</th>
										<th scope="col">Header</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1,001</td>
										<td>random</td>
										<td>data</td>
										<td>placeholder</td>
										<td>text</td>
									</tr>
									<tr>
										<td>1,002</td>
										<td>placeholder</td>
										<td>irrelevant</td>
										<td>visual</td>
										<td>layout</td>
									</tr>
									<tr>
										<td>1,003</td>
										<td>data</td>
										<td>rich</td>
										<td>dashboard</td>
										<td>tabular</td>
									</tr>
									<tr>
										<td>1,003</td>
										<td>information</td>
										<td>placeholder</td>
										<td>illustrative</td>
										<td>data</td>
									</tr>
									<tr>
										<td>1,004</td>
										<td>text</td>
										<td>random</td>
										<td>layout</td>
										<td>dashboard</td>
									</tr>
									<tr>
										<td>1,005</td>
										<td>dashboard</td>
										<td>irrelevant</td>
										<td>text</td>
										<td>placeholder</td>
									</tr>
									<tr>
										<td>1,006</td>
										<td>dashboard</td>
										<td>illustrative</td>
										<td>rich</td>
										<td>data</td>
									</tr>
									<tr>
										<td>1,007</td>
										<td>placeholder</td>
										<td>tabular</td>
										<td>information</td>
										<td>irrelevant</td>
									</tr>
									<tr>
										<td>1,008</td>
										<td>random</td>
										<td>data</td>
										<td>placeholder</td>
										<td>text</td>
									</tr>
									<tr>
										<td>1,009</td>
										<td>placeholder</td>
										<td>irrelevant</td>
										<td>visual</td>
										<td>layout</td>
									</tr>
									<tr>
										<td>1,010</td>
										<td>data</td>
										<td>rich</td>
										<td>dashboard</td>
										<td>tabular</td>
									</tr>
									<tr>
										<td>1,011</td>
										<td>information</td>
										<td>placeholder</td>
										<td>illustrative</td>
										<td>data</td>
									</tr>
									<tr>
										<td>1,012</td>
										<td>text</td>
										<td>placeholder</td>
										<td>layout</td>
										<td>dashboard</td>
									</tr>
									<tr>
										<td>1,013</td>
										<td>dashboard</td>
										<td>irrelevant</td>
										<td>text</td>
										<td>visual</td>
									</tr>
									<tr>
										<td>1,014</td>
										<td>dashboard</td>
										<td>illustrative</td>
										<td>rich</td>
										<td>data</td>
									</tr>
									<tr>
										<td>1,015</td>
										<td>random</td>
										<td>tabular</td>
										<td>information</td>
										<td>text</td>
									</tr>
								</tbody>
							</table>
						</div>
					</main>
				</div>
			</div>
		</>
	);
};
