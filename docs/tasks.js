module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: "Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task created successfully",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },

      "/":{
        get: {
            tags: {
              Tasks: "get all tasks",
            },
            description: "Get Task",
            operationId: "getTask",
            parameters: [],
            responses: {
              201: {
                description: "Task gets successfully",
                content: {
                    "application/json": {
                      schema: {
                        type:"array",
                        items:{
                            $ref: "#/components/schemas/getTasks",
                        }
                      },
                    },
                },
              },
              500: {
                description: "Server error",
              },
            },
        },
      },

      "/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
               type: "String",
              },
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/updateTitle" },
              },
            },
          },
          responses: {
            200: { description: "Task updated successfully" },
            404: { description: "Task not found"},
            500: { description: "Server error" },
          },
        },

        delete: {
            tags: {
              Tasks: "Delete a task",
            },
            description: "Delete task",
            operationId: "DeleteTask",
            parameters: [
              {
                name: "_id",
                in: "path",
                schema: {
                  $ref: "#/components/schemas/deleteTask",
                },
                description: "Id of task to be deleted",
              },
            ],
            requestBody: {
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Task" },
                },
              },
            },
            responses: {
              200: { description: "Task deleted successfully" },
              404: { description: "Task not found"},
              500: { description: "Server error" },
            },
        },

      },  
    },
  };
  