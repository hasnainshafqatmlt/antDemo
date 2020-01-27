import React from 'react';

import { Input, Button, Spin, Row, Col, DatePicker, InputNumber, Form, Icon} from 'antd';
const { TextArea } = Input;


function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {
   state = {
     
  };
  componentDidMount() {
    // To disable submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const val = values;
        val.dateOfBirth = values['dateOfBirth'].format('YYYY-MM-DD');
        this.props.requestAddArtist(val);
      }
    });
  };

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const nameError = isFieldTouched('name') && getFieldError('name');
    const countryError = isFieldTouched('country') && getFieldError('country');
    const cityError = isFieldTouched('city') && getFieldError('city');
    const linkError = isFieldTouched('link') && getFieldError('link');
    const discographyError = isFieldTouched('discography') && getFieldError('discography');
    const styleError = isFieldTouched('style') && getFieldError('style');
    const genreError = isFieldTouched('genre') && getFieldError('genre');
    const membersError = isFieldTouched('members') && getFieldError('members');
    const dateOfBirthError = isFieldTouched('dateOfBirth') && getFieldError('dateOfBirth');
    const bioError = isFieldTouched('bio') && getFieldError('bio');
     
    const config = {
      rules: [{ type: 'object', required: true, message: 'Please select Date!' }],
    };
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit} >
        <Row gutter={[16, 10]}>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={nameError ? 'error' : ''} help={nameError || ''} className=''>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input your name!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Name"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={12} className='pull-left'>            
            <Form.Item validateStatus={countryError ? 'error' : ''} help={countryError || ''} className=''>
              {getFieldDecorator('country', {
                rules: [{ required: true, message: 'Please input your country!' }],
              })(
                <Input
                  prefix={<Icon type="flag" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Country"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 10]}>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={cityError ? 'error' : ''} help={cityError || ''} className=''>
              {getFieldDecorator('city', {
                rules: [{ required: true, message: 'Please input your city!' }],
              })(
                <Input
                  placeholder="City"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={dateOfBirthError ? 'error' : ''} help={dateOfBirthError || ''} className=''>
              {getFieldDecorator('dateOfBirth', {
                rules: [{ required: true, message: 'Please select date!' }],
              })(
                <DatePicker placeholder='Date of Birth' />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 10]}>
          <Col span={24} className='pull-left'>
            <Form.Item validateStatus={linkError ? 'error' : ''} help={linkError || ''} className=''>
              {getFieldDecorator('link', {
                rules: [{ required: true, message: 'Please input your link!' }],
              })(
                <Input
                  placeholder="Wikipedia"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 10]}>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={discographyError ? 'error' : ''} help={discographyError || ''} className=''>
              {getFieldDecorator('discography', {
                rules: [{ required: true, message: 'Please input your discography!' }],
              })(
                <Input
                  placeholder="Discography"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
        
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={genreError ? 'error' : ''} help={genreError || ''} className=''>
              {getFieldDecorator('genre', {
                rules: [{ required: true, message: 'Please input your genre!' }],
              })(
                <Input
                  placeholder="Genre"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 10]}>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={styleError ? 'error' : ''} help={styleError || ''} className=''>
              {getFieldDecorator('style', {
                rules: [{ required: true, message: 'Please input your style!' }],
              })(
                <Input
                  placeholder="Style"
                  className=''
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={12} className='pull-left'>
            <Form.Item validateStatus={membersError ? 'error' : ''} help={membersError || ''} className=''>
              {getFieldDecorator('members', {
                rules: [{ required: true, message: 'Please input your members!' }],
              })(
                <InputNumber 
                  min={1} max={1000}
                  placeholder="Members"
                  className=''
                />,
              )}

            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 10]}>
          <Col span={24} className='pull-left'>
            <Form.Item validateStatus={bioError ? 'error' : ''} help={bioError || ''} className=''>
              {getFieldDecorator('bio', {
                rules: [{ required: true, message: 'Please input your short summary!' }],
              })(
                <TextArea rows={4}
                  placeholder="Summary"
                />,
              )}
            </Form.Item>
          </Col>
        </Row>
        
        
        <Form.Item>
          <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedHorizontalLoginForm = Form.create({ 
  name: 'horizontal_login',
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        value: props.editFields.name
      }),
      country: Form.createFormField({
        value: props.editFields.country
      }),
      city: Form.createFormField({
        value: props.editFields.city
      }),
      // dateOfBirth: Form.createFormField({
      //   value: props.editFields.dateOfBirth
      // }),
      bio: Form.createFormField({
        value: props.editFields.bio
      }),
      link: Form.createFormField({
        value: props.editFields.link
      }),
      picture: Form.createFormField({
        value: props.editFields.picture
      }),
      discography: Form.createFormField({
        value: props.editFields.discography
      }),
      genre: Form.createFormField({
        value: props.editFields.genre
      }),
      style: Form.createFormField({
        value: props.editFields.style
      }),
      members: Form.createFormField({
        value: props.editFields.members
      }),
    };
  },
}
  )(HorizontalLoginForm);


export default WrappedHorizontalLoginForm;