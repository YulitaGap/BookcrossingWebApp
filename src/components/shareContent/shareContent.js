
import React, { Component } from 'react';

class Share extends Component {

	render() {
		return (
			<div>
				<div className="container-contact">
					<div className="wrap-contact">
						<form className="contact-form validate-form">
							<span className="contact-form-title">
								Share your book
                                </span>

							<div className="wrap-input validate-input" >
								<input className="input" type="text" name="name" placeholder="Book name" />
								<span className="focus-input"></span>
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="autor" placeholder="Book author" />
								<span className="focus-input"></span>
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="publisher" placeholder="Publishment year" />
								<span className="focus-input"></span>
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="publisher" placeholder="Publisher" />
								<span className="focus-input"></span>
							</div>
							<div class="upload-btn-wrapper">
								<button class="btn"> Tap here to upload a book picture</button>
								<input type="file" name="myfile" />
							</div>

							<div className="container-contact-form-btn">
								<button className="contact-form-btn">
									<span>
										Share
                                    </span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

		);
	}
}

export default Share