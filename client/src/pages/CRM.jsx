import { Table, Tag, Button, Space, Input, Card, Row, Col, Statistic } from 'antd';
import { PlusOutlined, SearchOutlined, TeamOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const data = [
  { key: '1', name: 'Alice Johnson',   company: 'TechFlow',    email: 'alice@techflow.com',   type: 'Customer',  status: 'Active' },
  { key: '2', name: 'Bob Martinez',    company: 'DataSync',    email: 'bob@datasync.com',     type: 'Prospect',  status: 'Active' },
  { key: '3', name: 'Catherine Lee',   company: 'CloudBase',   email: 'cat@cloudbase.com',    type: 'Customer',  status: 'Inactive' },
  { key: '4', name: 'Derek Williams',  company: 'NetBridge',   email: 'derek@netbridge.com',  type: 'Lead',      status: 'Active' },
  { key: '5', name: 'Eva Nguyen',      company: 'PixelForge',  email: 'eva@pixelforge.com',   type: 'Customer',  status: 'Active' },
];

const columns = [
  { title: 'Name', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Company', dataIndex: 'company', key: 'company' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: (t) => <Tag color={t === 'Customer' ? 'green' : t === 'Prospect' ? 'blue' : 'orange'}>{t}</Tag>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s) => <Tag color={s === 'Active' ? 'green' : 'default'}>{s}</Tag>,
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space>
        <Button type="link" size="small">View</Button>
        <Button type="link" size="small">Edit</Button>
      </Space>
    ),
  },
];

const CRM = () => (
  <>
    <div className="page-header">
      <h1>CRM</h1>
      <p>Customer relationship management at a glance.</p>
    </div>
    <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
      <Col xs={24} sm={8}><Card className="glass-card"><Statistic title="Total Contacts" value={1284} prefix={<TeamOutlined />} valueStyle={{ color: '#6c5ce7' }} /></Card></Col>
      <Col xs={24} sm={8}><Card className="glass-card"><Statistic title="Active Customers" value={843} prefix={<CheckCircleOutlined />} valueStyle={{ color: '#00b894' }} /></Card></Col>
      <Col xs={24} sm={8}><Card className="glass-card"><Statistic title="Pending Follow-ups" value={56} prefix={<ClockCircleOutlined />} valueStyle={{ color: '#fdcb6e' }} /></Card></Col>
    </Row>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
      <Input placeholder="Search contacts…" prefix={<SearchOutlined />} style={{ width: 280 }} />
      <Button type="primary" icon={<PlusOutlined />}>Add Contact</Button>
    </div>
    <Table columns={columns} dataSource={data} className="glass-card" pagination={{ pageSize: 10 }} />
  </>
);

export default CRM;
