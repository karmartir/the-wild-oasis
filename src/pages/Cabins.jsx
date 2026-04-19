import Heading from "../ui/Heading";
import { useState } from "react";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <CabinTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          {!showForm ? "Add new cabin" : "Close adding new cabin form"}
        </Button>

        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
