import "./App.css";
import { Button } from "@edm/design-system";
import { PlusIcon } from "@radix-ui/react-icons";
import { css } from "styled-system/css";

function App() {
  return (
    <>
      <div className="card">
        <Button size={"iconLarge"}>
          <PlusIcon className={css({ width: "6", height: "6" })} />
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
