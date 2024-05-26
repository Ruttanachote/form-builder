<template>
  <div v-if="vueform.schema">
    <Vueform
      v-bind="vueform"
      :modelValue="formData"
      @update:modelValue="updateFormData"
    />
  </div>
  <pre>{{ formData }}</pre>
  <pre>{{ vueform }}</pre>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { schemas, response, inputlist } from "../template/schema";
export default {
  setup() {
    const vueform = ref({});
    const formData = ref({});

    const fetchFormData = async () => {
      try {
        const schema = schemas;        
        const dataResponse =  response
        const inputlist = ["nui", "number"];

        updateSchemaWithData(schema, dataResponse);


        vueform.value = schema;
      } catch (error) {
        console.error("Error fetching form schema or data:", error);
      }
    };

    onMounted(fetchFormData);

    const updateFormData = (newData) => {
      formData.value = newData;
    };

    function updateSchemaWithData(obj, data) {
      for (const key in data) {
        const schemaKey = key.split("_")[0]; // Extract the schema key from dataResponse key
        const schemaProp = key.split("_")[1]; // Extract the schema property from dataResponse key
        updateNestedSchema(
          obj.schema.container.schema,
          schemaKey,
          schemaProp,
          data[key]
        );
      }
    }

    function updateNestedSchema(obj, targetKey, schemaProp, newValue) {
      for (const key in obj) {
        if (key === targetKey) {
          obj[key][schemaProp] = newValue;
        } else if (typeof obj[key] === "object") {
          updateNestedSchema(obj[key], targetKey, schemaProp, newValue);
        }
      }
    }

    return {
      vueform,
      formData,
      updateFormData,
    };
  },
};
</script>
../template/schema001../template/schema