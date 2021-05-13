import Table from 'react-bootstrap/Table';

function TableIt({rowItems, name}) {
  return (
    <Table striped bordered hover>
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

export default TableIt