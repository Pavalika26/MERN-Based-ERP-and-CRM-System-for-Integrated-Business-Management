import { Table, Tag, Button, Space, Input } from 'antd';
import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

const data = [
  { key: '1', number: 'QT-001', client: 'Acme Corp',   amount: 12000, date: '2026-03-10', expiry: '2026-04-10', status: 'Accepted' },
  { key: '2', number: 'QT-002', client: 'Globex Inc',  amount: 8500,  date: '2026-03-18', expiry: '2026-04-18', status: 'Pending' },
  { key: '3', number: 'QT-003', client: 'Stark Ind.',  amount: 45000, date: '2026-03-22', expiry: '2026-04-22', status: 'Declined' },
  { key: '4', number: 'QT-004', client: 'Wayne Ent.',  amount: 7200,  date: '2026-04-01', expiry: '2026-05-01', status: 'Pending' },
];

const statusColors = { Accepted: 'green', Pending: 'orange', Declined: 'red' };

const columns = [
  { title: 'Quote #', dataIndex: 'number', key: 'number' },
  { title: 'Client', dataIndex: 'client', key: 'client' },
  { title: 'Amount', dataIndex: 'amount', key: 'amount', render: (v) => `$${v.toLocaleString()}`, sorter: (a, b) => a.amount - b.amount },
  { title: 'Date', dataIndex: 'date', key: 'date' },
  { title: 'Expiry', dataIndex: 'expiry', key: 'expiry' },
  { title: 'Status', dataIndex: 'status', key: 'status', render: (s) => <Tag color={statusColors[s]}>{s}</Tag> },
  { title: 'Action', key: 'action', render: () => <Space><Button type="link" size="small">View</Button><Button type="link" size="small">Convert</Button></Space> },
];

const Quotes = () => (
  <>
    <div className="page-header">
      <h1>Quotes</h1>
      <p>Manage quotations and proposals.</p>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
      <Input placeholder="Search quotes…" prefix={<SearchOutlined />} style={{ width: 280 }} />
      <Button type="primary" icon={<PlusOutlined />}>New Quote</Button>
    </div>
    <Table columns={columns} dataSource={data} className="glass-card" pagination={{ pageSize: 10 }} />
  </>
);

export default Quotes;
