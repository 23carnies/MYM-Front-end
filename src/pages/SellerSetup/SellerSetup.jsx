import React, { Component } from 'react'

class SellerSetup extends Component {
    state = { 
        invalidForm: true,
        formData: {
            storeName: '',
            storePicture: '',
            bio: ''
        }
     }

    handleSubmit = e => {
       e.preventDefault();
       this.props.handleSellerSetup(this.state.formData);
     };

    handleChange = e => {
      const formData = {...this.state.formData, [e.target.name]: e.target.value};
       this.setState({
         formData,
       });
     };


    render() { 
        return ( 
        <>
        <Form id="cf" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
        <h1>Store Setup</h1>
        {/* Name Input */}
          <Form.Field>
            <label>Store Name(required)</label>
            <input
              name="storeName"
              value={this.state.formData.storeName}
              onChange={this.handleChange}
              required
            />
          </Form.Field>
        {/* Store Picture Input */}
          <Form.Field>
            <label>Store Cover(required)</label>
            <input
              name="storePicture"
              value={this.state.formData.storePicture}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
        {/* Location Input */}
            <Form.Field>
            <label>Store City/Neighborhood(required)</label>
            <input
              name="storePicture"
              value={this.state.formData.storePicture}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
        {/* Bio Input */}
          <Form.Field>
            <label>Bio</label>
            <input
              name="bio"
              value={this.state.formData.bio}
              onChange={this.handleChange}
              required
            />
            </Form.Field>
          <Button
            type="submit"
          >
            Start Selling
          </Button>
        </Form>
        </>
         );
    }
}
 
export default SellerSetup;