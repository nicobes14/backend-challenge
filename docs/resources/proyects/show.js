module.exports = {
  get: {
    tags: ['proyects'],
    summary: 'Find proyect by id',
    description: 'Returns a single proyect',
    operationId: 'getProyectById',
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'id of proyect to return',
        required: true,
        schema: {
          $ref: '#/components/definitions/id',
        },
      },
    ],
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/definitions/ProyectShow',
            },
          },
        },
      },
      404: {
        description: 'Proyect not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/responses/NotFoundError',
            },
          },
        },
      },
    },
  },
}
