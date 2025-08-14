import { useState } from "react";
import Form from "../components/Form";
import Table from "../components/Table";

function TablePage() {
  const initialFormData = { name: "", email: "" };
  const [formData, setFormData] = useState(initialFormData);
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleFormDatachange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setTableData([...tableData, formData]);
    } else {
      const updated = [...tableData];
      updated[editIndex] = formData;
      setTableData(updated);
      setEditIndex(null);
    }
    setFormData(initialFormData);
  };

  const handleEdit = (index) => {
    setFormData(tableData[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    setTableData(tableData.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6">
       
      <Form
        formData={formData}
        handleFormDatachange={handleFormDatachange}
        handleSubmit={handleSubmit}
        editIndex={editIndex}
      />
      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default TablePage;
