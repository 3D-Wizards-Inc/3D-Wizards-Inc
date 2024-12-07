import * as Yup from 'yup';

export const AddStuffSchema = Yup.object({
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const EditStuffSchema = Yup.object({
  id: Yup.number().required(),
  name: Yup.string().required(),
  quantity: Yup.number().positive().required(),
  condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
  owner: Yup.string().required(),
});

export const AddProductSchema = Yup.object({
  option: Yup.string().oneOf(['CRYSTAL_DRAGON',
    'WINGED_CRYSTAL_DRAGON',
    'MECHANICAL_DRAGON',
    'IMPERIAL_DRAGON',
    'BABY_DRAGON',
    'FROG',
    'AXOLOTL',
    'GECKO',
    'RAT',
    'FERRET',
    'KNIGHT',
    'SAMURAI']).required(),
  size: Yup.string().oneOf(['x0_5', 'x1', 'x2', 'x3']).required(),
  color1: Yup.string().oneOf(['red', 'pink', 'orange', 'yellow',
    'green', 'blue', 'purple', 'brown',
    'black', 'gray', 'white',
  ]).required(),
  color2: Yup.string().oneOf(['red', 'pink', 'orange', 'yellow',
    'green', 'blue', 'purple', 'brown',
    'black', 'gray', 'white',
  ]).required(),
  color3: Yup.string().oneOf(['red', 'pink', 'orange', 'yellow',
    'green', 'blue', 'purple', 'brown',
    'black', 'gray', 'white',
  ]).required(),
  quantity: Yup.number().positive().required(),
  owner: Yup.string().required(),
});
