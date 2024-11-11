import { Button, Form, Input, Row, Col } from 'antd'
import useUserActions from '../hooks/useUserActions'

const NewUser = () => {
  const { newUser } = useUserActions()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    //console.log('Success:', values)
    newUser(values)
    form.resetFields()
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <h6 className='text-center'>Add new user</h6>
      <Row justify='center' align='middle'>
        <Col>
          <Form
            form={form}
            name='basic'
            labelCol={{
              span: 8
            }}
            wrapperCol={{
              span: 16
            }}
            style={{
              maxWidth: 600
            }}
            initialValues={{
              remember: true
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Name'
              name='name'
              rules={[
                {
                  required: true,
                  message: 'Please input your name!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Address'
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Please input your address!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label='Email'
              name='email'
              rules={[
                {
                  required: true,
                  message: 'Please input your email!'
                }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16
              }}
            >
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default NewUser
