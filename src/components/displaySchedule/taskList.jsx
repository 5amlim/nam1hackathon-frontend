export const TaskList = (props) => {
	return (
		<>
			<div className="task-list-container list-group w-100">
				{props.tasks.map((e, key) => {
					return (
						<label
							className="list-group-item d-flex gap-3 align-items-center "
							key={key}
						>
							<input
								className="form-check-input flex-shrink-0"
								type="checkbox"
								value=""
								style={{ fontSize: '1.375em' }}
							/>
							<span className="pt-1 form-checked-content d-flex justify-content-between w-100 align-items-center">
								<div className="task-list-info-box">
									<strong className="no-margins">{e.title}</strong>
									{e.info && <p className="no-margins">{e.info}</p>}
								</div>

								<small className="d-block text-muted">
									<svg className="bi me-1" width="1em" height="1em">
										<use xlinkHref="#calendar-event" />
									</svg>
									{e.time}
								</small>
							</span>
						</label>
					);
				})}
			</div>
		</>
	);
};
export const CompletedTaskList = (props) => {
	return (
		<>
			<div className="completed-task-list-container list-group w-100">
				{' '}
				{props.tasks.map((e, key) => {
					return (
						<label className="list-group-item d-flex gap-3" key={key}>
							<span className="pt-1 form-checked-content d-flex justify-content-between w-100 align-items-center">
								<strong className="text-secondary no-margins">{e.title}</strong>
								<small className="d-block text-muted completed-time-container">
									<svg className="bi me-1" width="1em" height="1em">
										<use xlinkHref="#calendar-event" />
									</svg>
									{e.time}
								</small>
							</span>
						</label>
					);
				})}
			</div>
		</>
	);
};
