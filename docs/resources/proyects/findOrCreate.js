module.exports = {
  post: {
    tags: ['proyects'],
    summary: 'Update or create a proyect',
    description: '',
    operationId: 'updateOrCreateProyect',
    produces: ['application/json'],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/definitions/ProyectUpdateorCreate',
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
