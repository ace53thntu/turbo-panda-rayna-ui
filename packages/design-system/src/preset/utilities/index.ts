import { Config } from "@pandacss/types";

// =================================================================
import { typography } from "./typography";

export const utilities: Config["utilities"] = {
  extend: {
    ...typography,
  },
};
