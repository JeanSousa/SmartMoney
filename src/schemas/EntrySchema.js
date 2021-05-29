const EntrySchema = {
    name: 'Entry',
    primaryKey: 'id',
    properties: {
      id: 'string',
      amount: 'double',
      description: 'string?',
      entryAt: 'date',
      latitude: 'float?',
      longitude: 'float?',
      address: 'string?',
      isInit: 'bool',
      category: 'Category', //tipo personalizado, é tipo schema Category (tipo chave estrangeira)
    },
};


export default EntrySchema;