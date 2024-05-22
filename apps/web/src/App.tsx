import "./App.css";
import { Button } from "@edm/design-system";
// import { PlusIcon } from "@radix-ui/react-icons";
// import { css } from "styled-system/css";
// import { button } from "styled-system/recipes";

function App() {
  return (
    <>
      <div className="card">
        <Button variant={"outline"} colorScheme={"secondary"}>
          Click me
        </Button>
        <Button>Click me state</Button>

        {/* <button className={button({ variant: "outline", colorScheme: "secondary" })}>Click Me</button> */}
      </div>
    </>
  );
}

export default App;
