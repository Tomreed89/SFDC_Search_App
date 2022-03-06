import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";


export default function Table() {
  return (
    <div className="Table">
      <Form>
        <label>
          {getName()}
          <input type="text" />
        </label>
        <Button onClick={makeRequest} variant="primary" type="submit">
          Submit!
        </Button>
      </Form>
      {abc}
      {"Version: " + version}
    </div>
  );

  
  }
