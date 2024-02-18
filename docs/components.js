module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"65cb5f876603b62e84faed43"
                    },
                    title:{
                        type:'string',
                        description:"name to task",
                        example:"ejercicio1"
                    },
                    completed:{
                        type:'boolean',
                        description:"true or false",
                        example:"true"
                    },
                }
            },

            getTasks:{
                type:'array',
                items:{
                    $ref: '#/components/schemas/Task' 
                },
                description:"An array of all tasks",
                example:[
                    {
                        _id: "12345",
                        title: "ejemplo1",
                        completed: true
                    },
                    {
                        _id: "67890",
                        title: "ejemplo2",
                        completed: false
                    }
                ]
            },

            updateTitle: {
                type: 'object',
                properties: {
                    title: {
                        type: 'string',
                        description: "Nuevo título de la tarea",
                        example: "Challenge3"
                    }
                },
                required: ['title']
            },

            deleteTask:{
                type:'objectId',
                description:"An id of a task",
                example: "65cc8ee31975b3899275adbf"
      
            }
        }
    }
}

