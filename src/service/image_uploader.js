// upload storage name : pp6uavko
// cloud name : dyon4mwx5

class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'pp6uavko');
    const res = await fetch('https://api.cloudinary.com/v1_1/dyon4mwx5/upload', {
      method: 'post',
      body: data,
    });
    return await res.json();
  }
}

export default ImageUploader;
