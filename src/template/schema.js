import schema001 from "./schemaoo1/schema001.json";
import response001 from "./schemaoo1/response001.json";
import { inputlist001 } from "./schemaoo1/inputlist001.js";
// export const schemas = {
//   size: "lg",
//   addClass: "vf-my-form",
//   schema: {
//     container: {
//       type: "group",
//       schema: {
//         number: {
//           type: "text",
//           inputType: "number",
//           rules: [""],
//           autocomplete: "off",
//           label: "Number",
//           default: 10,
//         },
//         nui: {
//           type: "text",
//           inputType: "number",
//           rules: [""],
//           autocomplete: "off",
//           label: "Number",
//           default: 10,
//         },
//       },
//       columns: {
//         lg: {
//           container: 12,
//         },
//       },
//     },
//   },
// };

export const schemas = schema001;
// export const response = {
//   nui_default: 50,
//   nui_rules: ["nullable", "min:10", "max:100", "numeric"],
//   number_default: 900,
//   number_inputType: "text",
//   number_rules: ["nullable", "min:10", "max:100", "numeric"],
// };
export const response = response001;

// export const inputlist = ["nui", "number"];
export const inputlist = inputlist001;