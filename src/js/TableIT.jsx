import Table from 'react-bootstrap/Table';

function TableIT({rowItems, name}) {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>{ name }</th>
      </tr>
    </thead>
    <tbody>
      {
        rowItems.map((item, index) => (
          <tr key={"table-" + index + "-" + item}>
            <td>{ item }</td>
        </tr>
        ))
      }
    </tbody>
  </Table>
  );
}

export default TableIT