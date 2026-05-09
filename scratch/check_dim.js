const sizeOf = require('image-size');
const path = require('path');
const fs = require('fs');

const imgPath = 'c:\\Users\\Mr\\Desktop\\way2smile-nextjs (1)\\way2smile\\public\\Categorized Treatments\\Root Canal Treatment.png';
if (fs.existsSync(imgPath)) {
    const dimensions = sizeOf(imgPath);
    console.log(dimensions.width + 'x' + dimensions.height);
} else {
    console.log('File not found');
}
