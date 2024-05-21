<template>
  <Vueform
    v-bind="vueform"
    :modelValue="formData"
    @update:modelValue="updateFormData"
  />

  <pre>{{ formData }}</pre>

</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {

  setup() {
    const vueform = ref({});
    const formData = ref({});

    const fetchFormData = async () => {
      try {
        const schemaResponse = await axios.get("API_URL_FOR_SCHEMA");
        const dataResponse = await axios.get("API_URL_FOR_DATA");

        vueform.value = {
          size: "lg",
          addClass: "vf-my-form",
          // schema: schemaResponse.data
          schema: {
            container: {
              type: "group",
              schema: {
                container4: {
                  type: "group",
                  schema: {
                    column1: {
                      type: "group",
                      columns: {
                        container: 3,
                      },
                      schema: {
                        text: {
                          type: "text",
                          label: "Text",
                        },
                      },
                    },
                    column2: {
                      type: "group",
                      columns: {
                        container: 3,
                      },
                      schema: {
                        text_1: {
                          type: "text",
                          label: "Text",
                        },
                      },
                    },
                    column3: {
                      type: "group",
                      columns: {
                        container: 3,
                      },
                      schema: {
                        text_2: {
                          type: "text",
                          label: "Text",
                        },
                      },
                    },
                    column4: {
                      type: "group",
                      columns: {
                        container: 3,
                      },
                      schema: {
                        text_3: {
                          type: "text",
                          label: "Text",
                        },
                      },
                    },
                  },
                },
              },
              columns: {
                lg: {
                  container: 12,
                },
              },
            },
          },
        };
        // formData.value = dataResponse.data;
        formData.value = {
          text: "Hello World",
          text_1: "Hello World",
          text_2: "Hello World",
          text_3: "Hello World",
        };
      
      } catch (error) {
        console.error("Error fetching form schema or data:", error);
      }
    };

    onMounted(fetchFormData);

    const updateFormData = (newData) => {
      formData.value = newData;
    };

    return {
      vueform,
      formData,
      updateFormData,
    };
  },
};
</script>
