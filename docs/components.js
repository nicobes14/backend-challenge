module.exports = {
  components: {
    definitions: {
      id: {
        type: 'integer',
      },
      ProyectInput: {
        type: 'object',
        properties: {
          proyectname: {
            type: 'string',
            required: true,
          },
          description: {
            type: 'string',
            required: true,
          },
          status: {
            type: 'boolean',
            required: true,
          },
          managerId: {
            type: 'integer',
            required: true,
          },
          usersInProyect: {
            type: 'array',
          },
        },
      },
      Proyect: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          proyectname: {
            type: 'string',
            required: true,
            example: 'Some proyect name',
          },
          description: {
            type: 'string',
            required: true,
            example: 'Some proyect description',
          },
          status: {
            type: 'boolean',
            required: true,
            example: true,
          },
          managerId: {
            type: 'integer',
            required: true,
            example: 1,
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
      ProyectUpdateorCreate: {
        type: 'object',
        properties: {
          proyectname: {
            type: 'string',
            required: true,
            example: 'Some proyect name',
          },
          description: {
            type: 'string',
            required: true,
            example: 'Some proyect description',
          },
          status: {
            type: 'boolean',
            required: true,
            example: true,
          },
          managerId: {
            type: 'integer',
            required: true,
            example: 1,
          },
          usersInProyectId: {
            type: 'array',
            example: [1, 2, 3],
          },
          newProyectName: {
            type: 'string',
            exame: 'Some new proyect name',
          },
        },
      },
      ProyectUpdateorCreateById: {
        type: 'object',
        properties: {
          proyectname: {
            type: 'string',
            required: true,
            example: 'Some proyect name',
          },
          description: {
            type: 'string',
            required: true,
            example: 'Some proyect description',
          },
          status: {
            type: 'boolean',
            required: true,
            example: true,
          },
          managerId: {
            type: 'integer',
            required: true,
            example: 1,
          },
          usersInProyectId: {
            type: 'array',
            example: [1, 2, 3],
          },
        },
      },
      ProyectShow: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',
            example: 1,
          },
          proyectname: {
            type: 'string',
            required: true,
            example: 'Some proyect name',
          },
          description: {
            type: 'string',
            required: true,
            example: 'Some proyect description',
          },
          status: {
            type: 'boolean',
            required: true,
            example: true,
          },
          managerId: {
            type: 'integer',
            required: true,
            example: 1,
          },
          usersInProyect: {
            type: 'array',
            example: [
              { id: 1, name: 'John Doe' },
              { id: 2, name: 'Other user' },
            ],
          },
          createdAt: {
            type: 'string',
            format: 'date-time',
          },
          updatedAt: {
            type: 'string',
            format: 'date-time',
          },
        },
      },
    },
    responses: {
      NotFoundError: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Error message',
          },
        },
      },
    },
  },
}
