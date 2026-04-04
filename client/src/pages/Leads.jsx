import { Table, Tag, Button, Space, Input } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const data = [
  { key: '1', name: 'Acme Corp',       contact: 'john@acme.com',     status: 'New',           value: 12000, source: 'Website' },
  { key: '2', name: 'Globex Inc',      contact: 'sara@globex.com',   status: 'Contacted',     value: 8500,  source: 'Referral' },
  { key: '3', name: 'Stark Industries',contact: 'tony@stark.com',    status: 'Qualified',     value: 45000, source: 'LinkedIn' },
  { key: '4', name: 'Wayne Enterprises', contact: 'bruce@wayne.com', status: 'Proposal Sent', value: 32000, source: 'Cold Call' },
  { key: '5', name: 'Umbrella Corp',   contact: 'alice@umbrella.com',status: 'Negotiation',   value: 19500, source: 'Website' },
];

const statusColors = {
  New: 'blue', Contacted: 'cyan', Qualified: 'green',
  'Proposal Sent': 'orange', Negotiation: 'purple',
};

const columns = [
  { title: 'Company', dataIndex: 'name', key: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
  { title: 'Contact', dataIndex: 'contact', key: 'contact' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (s) => <Tag color={statusColors[s]}>{s}</Tag>,
    filters: Object.keys(statusColors).map((s) => ({ text: s, value: s })),
    onFilter: (val, record) => record.status === val,
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    render: (v) => `$${v.toLocaleString()}`,
    sorter: (a, b) => a.value - b.value,
  },
  { title: 'Source', dataIndex: 'source', key: 'source' },
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

const Leads = () => (
  <>
    <div className="page-header">
      <h1>Leads</h1>
      <p>Track and manage your sales pipeline.</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
      <Input placeholder="Search leads…" prefix={<SearchOutlined />} style={{ width: 280 }} />
      <Button type="primary" icon={<PlusOutlined />}>Add Lead</Button>
    </div>
    <Table columns={columns} dataSource={data} className="glass-card" pagination={{ pageSize: 10 }} />
  </>
);

export default Leads;
