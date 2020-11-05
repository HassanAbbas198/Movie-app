import React from 'react';

import { Button, Modal } from 'react-bootstrap';

import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
	return (props) => {
		const [error, show, clearError] = useHttpErrorHandler(axios);

		return (
			<React.Fragment>
				<Modal show={show} onHide={clearError}>
					<Modal.Header closeButton>
						<Modal.Title>Oops!</Modal.Title>
					</Modal.Header>
					<Modal.Body>{error ? error : null}</Modal.Body>
					<Modal.Footer>
						<Button variant="danger" onClick={clearError}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
				<WrappedComponent {...props} />
			</React.Fragment>
		);
	};
};
export default withErrorHandler;
