import Service from './utils/service';

const service = new Service();
service.getData()
  .then(console.log)