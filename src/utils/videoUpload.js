var COS = require('cos-wx-sdk-v5')
var cos = new COS({
  SecretId: 'AKIDB7mdGcbWIGxRhgz4YmjQuBD5i7uUE2ye',
  SecretKey: 'KPgjX6RknZ7PSDivf9QREnCG2rPffOGq'
})
var uploadVideo = function (tempFilePath) {
  return new Promise((resolve, reject) => {
    var filePath = tempFilePath
    var filename = filePath.substr(filePath.lastIndexOf('/') + 1)
    cos.postObject({
      Bucket: 'view-1302789085',
      Region: 'ap-shanghai',
      Key: 'video/' + filename,
      FilePath: filePath,
      onProgress: function (info) {
        console.log(info, 787)
      }
    }, function (err, data) {
      if (data) {
        data.filename = filename
      }
      return resolve(err || data)
    })
  })
}
module.exports = uploadVideo
