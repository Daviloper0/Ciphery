import { createCustomElements } from "./components/components.js";
import { generatePassword } from "./features/generatepassword.js";
import { autoSwitchColorModeIfPossible } from "./themes/switchColorMode.js";

createCustomElements();
autoSwitchColorModeIfPossible();
generatePassword();