//schema é como se fossem as tabelas
const CategorySchema = {
    name: 'Category',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      color: {type: 'string', default: '#fff'},
      isDefault: {type: 'bool', default: false},
      isCredit: {type: 'bool', default: false},
      isDebit: {type: 'bool', default: false},
      order: {type: 'int', default: 0},
      entries: 'Entry[]', //relacionamento de 1 para muitos (uma categoria tem muitas entradas)
    }
};

export default CategorySchema;