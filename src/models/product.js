import revalidator from 'revalidator';

const productSchema = {
  properties: {
    name: {
      description: 'Product name',
      type: 'string',
      required: true,
      messages: {
        required: 'Product name required',
      },
    },
    price: {
      description: 'Price',
      type: 'number',
      required: true,
      messages: {
        required: 'Price required',
      },
    },
    description: {
      description: 'Description',
      type: 'string',
      allowEmpty: true,
      size: 300,
      messages: {
        size: 'Description length max (300)',
      },
    },
    amount: {
      description: 'Amount in Inventory',
      type: 'number',
      required: true,
      messages: {
        required: 'Amount required',
      },
    },
  },
};

const productValidation = (data) => revalidator.validate(data, productSchema);

export { productValidation };
