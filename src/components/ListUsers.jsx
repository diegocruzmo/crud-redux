import { Space, Table, Badge } from 'antd'
import { useAppSelector } from '../hooks/Store'
import useUserActions from '../hooks/useUserActions'

const ListUsers = () => {
  const users = useAppSelector((state) => state.users)
  const { removeUser: handleRemoveUser } = useUserActions()
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <div className='d-flex gap-2 justify-content-left align-items-center'>
          <img
            style={{ width: '40px', height: '40px' }}
            className='rounded-circle'
            src={`https://unavatar.io/${text.split(' ')[0]}/`}
            alt={text}
          />
          <a>{text}</a>
        </div>
      )
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      key: 'action',
      render: (data) => (
        <Space size='middle'>
          <button
            className='btn btn-primary btn-sm text-decoration-none'
            onClick={() => console.log(data.id)}
          >
            Update
          </button>
          <button
            className='btn btn-danger btn-sm text-decoration-none'
            onClick={() => handleRemoveUser(data.id)}
          >
            Delete
          </button>
        </Space>
      )
    }
  ]

  return (
    <>
      <div className='d-flex gap-2'>
        <h6>List Of Users</h6>
        <Badge count={users.length} color='blue' />
      </div>
      <Table columns={columns} dataSource={users} />
    </>
  )
}

export default ListUsers
