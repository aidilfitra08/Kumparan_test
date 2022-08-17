import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.name}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.email}</td>
        </tr>
        <tr>
          <td width="200">Address</td>
          <td width="10">:</td>
          {/* <td>{props.getUserDetail.address}</td> */}
        </tr>
        <tr>
          <td width="200">Company</td>
          <td width="10">:</td>
          {/* <td>{props.getUserDetail.company.name}</td> */}
        </tr>

      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
