import { Product } from '../types';

export type ProductTypeCategoryId =
  | 'all'
  | 'shivling-jaladhari'
  | 'akhand-shivling'
  | 'brass-puja-sets'
  | 'nandi-murti';

export interface ProductCategoryDefinition {
  id: Exclude<ProductTypeCategoryId, 'all'>;
  name: string;
  nameHindi: string;
  description: string;
  sampleImage: string;
}

export const PRODUCT_CATEGORY_DEFINITIONS: ProductCategoryDefinition[] = [
  {
    id: 'shivling-jaladhari',
    name: 'Shivling with Jaladhari',
    nameHindi: 'नर्मदेश्वर शिवलिंग एवं जलाधारी',
    description: 'Natural Narmada river stone Shivlings paired with hand-crafted stone Jaladhari bases.',
    sampleImage: '/images/products/product-3.jpeg',
  },
  {
    id: 'akhand-shivling',
    name: 'Akhand Shivling',
    nameHindi: 'अखंड नर्मदेश्वर शिवलिंग',
    description: 'Single-piece continuous Narmada stone Shivling and Jaladhari without joints.',
    sampleImage: '/images/products/product-6.jpeg',
  },
  {
    id: 'brass-puja-sets',
    name: 'Brass Jaladhari & Puja Sets',
    nameHindi: 'पीतल जलाधारी व पूर्ण पूजन सेट',
    description: 'Natural Narmadeshwar Shivling paired with brass Jaladhari or complete puja set.',
    sampleImage: '/images/products/product-35.jpeg',
  },
  {
    id: 'nandi-murti',
    name: 'Nandi Ji & Stone Murti',
    nameHindi: 'नंदी जी एवं नर्मदा पाषाण मूर्ति',
    description: 'Hand-sculpted Narmada stone Nandi Ji and sacred murtis from Bakawan.',
    sampleImage: '/images/products/product-36.jpeg',
  },
];

export function getProductTypeCategory(product: Product): Exclude<ProductTypeCategoryId, 'all'> {
  const lowerName = product.name.toLowerCase();
  if (lowerName.includes('nandi') || lowerName.includes('murti')) {
    return 'nandi-murti';
  }
  if (lowerName.includes('akhand')) {
    return 'akhand-shivling';
  }
  if (lowerName.includes('brass') || lowerName.includes('full set')) {
    return 'brass-puja-sets';
  }
  return 'shivling-jaladhari';
}
