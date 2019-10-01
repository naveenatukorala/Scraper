import S3 from 'aws-s3';

 var s3upload = function(){
 const config = {
    bucketName: 'myBucket',
    dirName: 'photos', 
    region: 'eu-west-1',
    accessKeyId: 'ANEIFNENI4324N2NIEXAMPLE',
    secretAccessKey: 'cms21uMxçduyUxYjeg20+DEkgDxe6veFosBT7eUgEXAMPLE',
    s3Url: 'https://my-s3-url.com/', 
}
 
const S3Client = new S3(config);

 
S3Client
    .uploadFile(file, newFileName)
    .then(data => console.log(data))
    .catch(err => console.error(err))
}

module.exports = s3upload;

import {S3upload} from 'C:\Users\natukorala\AppData\Local\Google\Chrome\User Data\Default\Extensions\mbigbapnjcgaffohmbkdlecaccepngjd\1.7_0\js\s3.js';
