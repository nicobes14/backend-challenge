module.exports = {
  post: {
    tags: ['proyects'],
    summary: 'Update or create a proyect',
    description: '',
    operationId: 'updateOrCreateProyectById',
    produces: ['application/json'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Proyect id to update',
        required: true,
        schema: {
          $ref: '#/components/definitions/id',
        },
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/definitions/ProyectUpdateorCreateById',
          },
        },
      },
    },
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/definitions/Proyect',
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
