import { useState } from 'react';
import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoAction } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid'
import { todoListSelector, searchTextSelector } from '../redux/selector';

export default function TodoList() {
  const [todoName, setTodoName] = useState()
  const [prioriry, setPriority] = useState('Low')
  const dispatch = useDispatch()


  const todoList = useSelector(todoListSelector)


  const handleAddButton = () => {
    dispatch(addTodoAction({
      id: uuidv4(),
      name: todoName,
      prioriry: prioriry,
      completed: false
    }))
    setTodoName('')
  }
  const handleChangePriority = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>

        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList && todoList.map(todo => { return <Todo key={todo.id} name={todo.name} prioriry={todo.prioriry} /> })}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoName} onChange={(e) => { setTodoName(e.target.value) }} />
          <Select defaultValue="Medium" value={prioriry} onChange={handleChangePriority}>
            <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAddButton}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
