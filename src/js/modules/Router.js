import Home from '../pages/Home';
import Hbg from '../pages/Hbg';

export default class Router {
  constructor() {
    this.model = {
      pathName: location.pathname,
    };

    this.initRouting();
  }

  initRouting() {
    const pathName = this.model.pathName;
    switch (pathName) {
      case '/':
        new Home();
        break;
      case '/hbg':
        new Hbg();
        break;
      default:
        console.log('No matching route found');
        break;
    }
  }
}
