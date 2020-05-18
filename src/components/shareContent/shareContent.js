import React, { Component } from 'react';
import './shareForm.css'

class Share extends Component {
	constructor() {
		super();

		this.state = {
			book_name: "",
			book_author: "",
			publisher: "",
			publishment_year: "",
			myfile:"",
			errors: {
				book_name: "",
				book_author: "",
				publisher: "",
				publishment_year: "",
			}
		}
	}
	componentDidMount() {
		// with trouble
		if (!(this.state.errors.book_name || this.state.errors.book_author || this.state.errors.publisher || this.state.errors.publishment_year)) {
			fetch('./books').then(resp => {
				return this.state
			}).then(body => {console.log(body)})
		}
	}

	handleChange(ev) {
		this.setState({
			[ev.target.name]:ev.target.value
		})
	}

	onSubmit(event) {
		event.preventDefault();
		const {errors} = this.state;
		if (errors.book_name || errors.book_author || errors.publisher || errors.publishment_year) {
			console.log('Invalid form')
		}

		console.log(this.state)
		this.setState({
			book_name: "",
			book_author: "",
			publisher: "",
			publishment_year: "",
			location:"",
			myfile:"",
			errors: {
				book_name: "",
				book_author: "",
				publisher: "",
				publishment_year: "",
			}

		})
	}

	validate(ev){
		const {name, value} = ev.target;
		switch (name) {
			case 'book_name':
				if (value.length < 2){
					this.setState( { errors: {...this.state.errors, book_name: "Too short book name" } })
					// alert("Too short book name");
				}
				break;

			case 'book_author':
				if (value.length < 2){
					this.setState( { errors: {...this.state.errors, book_author: "Too short book author name" } })
					// alert("Too short book author name");
				}
				break;

			case 'publisher':
				if (value.length < 2){
					this.setState( { errors: {...this.state.errors, publisher: "Too short book publisher name" } })
					// alert("Too short book publisher name");
				}
				break;

			case 'publishment_year':
				if(!Number.isInteger(parseInt(value,10)) || parseInt(value,10)<1000 || parseInt(value,10)>2021) {
					this.setState( { errors: {...this.state.errors, publishment_year: "Wrong publishment year" } })
					// alert("Wrong publishment year");
				}
				break;

			default:break;
		}
	}

	render() {
		return (
			// <div>
				<div className="container-share">
					<div className="wrap-share">
						<form className="share-form" onSubmit={event => this.onSubmit(event)}>
							<span className="share-form-title">
								Share your book
							</span>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="book_name" value={this.state.book_name}
									   onChange={e => this.handleChange(e)} placeholder="Book name"
									   onBlur={e => this.validate(e)}/>
								{/*<span className="focus-input"/>*/}
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="book_author" value={this.state.book_author}
									   onChange={e => this.handleChange(e)} placeholder="Book author"
									   onBlur={e => this.validate(e)}/>
								{/*<span className="focus-input"/>*/}
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="numbers" name="publishment_year" value={this.state.publishment_year}
									   onChange={e => this.handleChange(e)} placeholder="Publishment year"
									   onBlur={e => this.validate(e)}/>
								{/*<span className="focus-input"/>*/}
							</div>

							<div className="wrap-input validate-input">
								<input className="input" type="text" name="publisher" value={this.state.publisher}
									   onChange={e => this.handleChange(e)} placeholder="Publisher"
									   onBlur={e => this.validate(e)}/>
								{/*<span className="focus-input"/>*/}
							</div>


							{/*<div className="upload-btn-wrapper">*/}
							{/*	<button className="btn"> Tap here to upload a book picture</button>*/}
							{/*	<input type="file" value={this.state.picture} name="myfile"/>*/}
							{/*</div>*/}

							<div className="container-share-form-btn">
								<button type="submit" value="save" className="share-form-btn">
									<span>
										Share
                                    </span>

								</button>
							</div>
							{/*<h1 className="wrong-input" dis> Wrong input</h1>*/}
						</form>
					</div>
				</div>
			// </div>

		);
	}
}

export default Share