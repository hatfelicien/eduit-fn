import React from "react"

const ManagingOrganizations = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold my-5">ManagingOrganizations</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Sample organization</th>
            <th>
              Id: <span>1930ufasqio</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Abc Abc</td>
            <td>Minimum</td>
          </tr>
          <tr>
            <td>Organization Name</td>
            <td>Abc Abc</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ManagingOrganizations
