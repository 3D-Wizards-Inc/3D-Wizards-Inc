import * as Yup from 'yup';
// product validation enum imports
import { Option, Size, Color } from '@prisma/client';

const allowedOptions = Object.values(Option);
const allowedSizes = Object.values(Size);
const allowedColors = Object.values(Color);

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

export const EditProductSchema = Yup.object({
  id: Yup.number().required(),
  option: Yup.string()
    .oneOf(allowedOptions, `Option must be one of: ${allowedOptions.join(', ')}`)
    .required('Option is required'),
  size: Yup.string()
    .oneOf(allowedSizes, `Size must be one of: ${allowedSizes.join(', ')}`)
    .required('Size is required'),
  quantity: Yup.number().required(),
  owner: Yup.string().required(),
  color1: Yup.string()
    .oneOf(allowedColors, `Color must be one of: ${allowedColors.join(', ')}`)
    .required('Color is required'),
  color2: Yup.string()
    .oneOf(allowedColors, `Color must be one of: ${allowedColors.join(', ')}`)
    .required('Color is required'),
  color3: Yup.string()
    .oneOf(allowedColors, `Color must be one of: ${allowedColors.join(', ')}`)
    .required('Color is required'),
  checkedout: Yup.boolean().required(),

});

export const AddProductSchema = Yup.object({
  option: Yup.string()
    .oneOf([
      'CRYSTAL_DRAGON',
      'WINGED_CRYSTAL_DRAGON',
      'MECHANICAL_DRAGON',
      'IMPERIAL_DRAGON',
      'FROG',
      'AXOLOTL',
      'GECKO',
      'RAT',
      'FERRET',
      'KNIGHT',
      'SAMURAI',
    ])
    .required(),
  size: Yup.string().oneOf(['x0_5', 'x1', 'x2', 'x3']).required(),
  color1: Yup.string()
    .oneOf(['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white'])
    .required(),
  color2: Yup.string()
    .oneOf(['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white'])
    .required(),
  color3: Yup.string()
    .oneOf(['red', 'pink', 'orange', 'yellow', 'green', 'blue', 'purple', 'brown', 'black', 'gray', 'white'])
    .required(),
  quantity: Yup.number().positive().required(),
  owner: Yup.string().required(),
});
