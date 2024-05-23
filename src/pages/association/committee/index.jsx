import { Container } from "react-bootstrap";
import tableData from "./dataStore";
import TableRow from "./tableRow";

export default function Committee() {
  return (
    <div>
      <Container>
        <h1 className="fs-1 mb-4">한국로보컵협회 위원회를 소개합니다.</h1>
        <div className="table-responsive">
          <table className="table table-striped table-hover border">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Affiliation</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Position</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => {
                return (
                  <TableRow
                    no={row.no}
                    name={row.name}
                    affiliation={row.affiliation}
                    email={row.email}
                    position={row.position}
                    key={row.no}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
}
