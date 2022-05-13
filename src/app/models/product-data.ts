import { RawProductData } from "./raw-product-data.interface";

export class ProductData {
    itemName: string;
    itemDescription: string;
    imageUrl: string;

    constructor(data: RawProductData) {
        this.itemName = data.itemName;
        this.itemDescription = data.itemDescription;
        this.imageUrl = data.image;
    }
    
}

const rawData: RawProductData[] = [
    {
        id: 0,
        itemName: 'Vegetables',
        itemDescription: 'These are vegetables',
        storageLocation: 'Bin number 3',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'
    },
    {
        id: 1,
        itemName: 'Fruits',
        itemDescription: 'These are fruits',
        storageLocation: 'Bin number 19',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'
    },
    {
        id: 2,
        itemName: 'Bread',
        itemDescription: 'This is bread',
        storageLocation: 'Bin number 5',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'
    },
    {
        id: 3,
        itemName: 'Milk',
        itemDescription: 'This is milk',
        storageLocation: 'Bin number 80',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'

    },
    {
        id: 4,
        itemName: 'Toothpaste',
        itemDescription: 'This is toothpaste',
        storageLocation: 'Bin number 32',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'
        
    },
    {
        id: 5,
        itemName: 'Soap - Bar',
        itemDescription: 'These are bars of soap',
        storageLocation: 'Bin number 90',
        inventoryLevel: 5,
        image: '/assets/images/vegetables.jpg'
    }
];

//const productData : ProductData[] = rawData.map(data => new ProductData(data));
const productData : ProductData[]=[];
rawData.forEach(data => {
    const newData = new ProductData(data);
    productData.push(newData);
})

export {productData};