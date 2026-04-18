import axios from "axios";

function Upload({ setData }) {

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post("http://127.0.0.1:8000/upload", formData);

    alert("Uploaded Successfully");
  };

  return (
    <div>
      <h3>Upload CSV</h3>
      <input type="file" onChange={handleUpload} />
    </div>
  );
}

export default Upload;