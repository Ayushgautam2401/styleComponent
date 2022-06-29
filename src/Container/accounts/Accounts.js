import React from "react";
import { getAccountState } from "Store/Selector";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Styledbutton } from "../../Components/Inputs/button";
import { useHistory } from "react-router-dom";
import { Fragment } from "react";

function Account() {
  const history = useHistory();
  const { list, raw } = useSelector(getAccountState);

  const handleAccount = (Account = {}) => {
    const { id } = Account;
    history.push(`/Account/Accountform/${id || ""}`);
  };


  const renderAccountItem = (AccountID, index) => {
    const { id, name } = raw[AccountID] || {};

    return (
      <tbody key={id}>
        <tr key={id}>
          <td>{id}</td>
          {/* <td>{index + 1}</td> */}
          <td>{name}</td>
          {/* <td>{details}</td> */}
          <td>
            <Styledbutton
              className="update"
              onClick={() => {
                handleAccount(raw[AccountID]);
              }}
            >
              update
            </Styledbutton>
          </td>
        </tr>
      </tbody>
    );
  };

  return (
    <Fragment>
      <Styledbutton
        onClick={() => {
          handleAccount();
        }}
      >
        Add
      </Styledbutton>

      {
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              {/* <th>S.No.</th> */}
              <th>Name</th>
              
              <th>Edit</th>
            </tr>
          </thead>
          {list?.map(renderAccountItem)}
        </Table>
      }
    </Fragment>
  );
}

export default Account;
