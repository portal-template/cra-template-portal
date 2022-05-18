import bootstrap from '@portal/theme1'
import './index.css'
import theme from './theme'

bootstrap({
  container: document.getElementById('app1'),
  appId: '<appid>',
  theme,
  defaultPage: 'home.index',
  pageLoader: (file) => import(`./pages/${file}`),
  portal: {
    url: '<portal-api-address>'
  },
})
