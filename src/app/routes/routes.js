import CoreLayout from "../layouts/CoreLayout";
import HomeView from "../pages/HomeView";
import CounterPage from "../pages/CounterPage";

const routes = {
  path: '',
  component: CoreLayout,
  childRoutes: [
    {
      path: '/',
      component: HomeView
    },{
      path: '/counter',
      component: CounterPage
    }
  ]
}

export { routes };
