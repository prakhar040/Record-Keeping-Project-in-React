import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [form, setForm] = useState({});
  const [data, setData] = useState([]);
  const addData = () => {
    setData([...data, form]); // 3 dot lagao , array ka naam, comma doh, {} object likho jo add karna hai // isse spread operator bolte
    setForm({ ...form, name: "", surname: "" });
  };
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  };
  return (
    <div className="App">
      <Header />
      {/* form */}
      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            id="outlined-basic"
            label="Enter Name"
            variant="outlined"
          />
          <TextField
            value={form.surname}
            onChange={(event) =>
              setForm({ ...form, surname: event.target.value })
            }
            id="outlined-basic"
            label="Enter Surname"
            variant="outlined"
          />
          <Button
            onClick={addData}
            color="success"
            variant="outlined"
            sx={{
              color: "#5758BB",
              backgroundColor: "white",
              borderColor: "#5758BB",
              ":hover": {
                bgcolor: "#5758BB",
                color: "white",
                borderColor: "black",
              },
            }}
          >
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* data */}
      <div className="data">
        <div className="data-heading">
          <h4>Name</h4>
          <h4>Surname</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className=" field">
              <h5>{element.name}</h5>
              <h5>{element.surname}</h5>
              <Button
                sx={{
                  color: "#5758BB",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingLeft: "0.5rem",
                  border: "0",
                  ":hover": {
                    border: "0",
                    backgroundColor: "white",
                  },
                  ":active": {
                    backgroundColor: "white",
                    animation: "0",
                  },
                }}
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={() => removeItem(index)}
              >
                Remove
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;