module.exports = {
  delete: {
    tags: ['proyects'],
    summary: 'Deletes a proyect',
    description: '',
    operationId: 'deleteProyect',
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: 'Proyect id to delete',
        required: true,
        schema: {
          $ref: '#/components/definitions/id',
        },
      },
    ],
    responses: {
      204: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: null,
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
