module.exports = {
  get: {
    tags: ['proyects'],
    summary: 'Proyect list',
    description: 'Returns a list of characters with pagination',
    operationId: 'getProyects',
    produces: ['application/json'],
    parameters: [
      {
        name: 'proyectname',
        in: 'query',
        description: 'Filter by name',
        schema: {
          type: 'string',
        },
      },
      {
        name: 'page',
        in: 'query',
        description: 'Page number',
        schema: {
          type: 'integer',
        },
      },
      {
        name: 'size',
        in: 'query',
        description: 'Size of the pagination',
        schema: {
          type: 'interger',
        },
      },
    ],
    responses: {
      200: {
        description: 'Successful operation',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/definitions/ProyectShow',
              },
            },
          },
        },
      },
    },
  },
}
