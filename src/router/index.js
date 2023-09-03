import { Redirect } from 'react-router-dom'
import Discover from '@/pages/discover'
import Friend from '@/pages/friend'
import Mine from '@/pages/mine'

import JMRecommend from '@/pages/discover/child-components/recommend'
import JMRank from '@/pages/discover/child-components/rank'
import JMAlbum from '@/pages/discover/child-components/album'
import JMRadio from '@/pages/discover/child-components/radio'
import JMSinger from '@/pages/discover/child-components/singer'
import JMToplist from '@/pages/discover/child-components/toplist'

const routes = [
  { 
    path: '/', 
    exact: true, 
    render: () => <Redirect to="/discover" /> 
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      { path: '/discover', render: () => <Redirect to="/discover" /> },
      { path: '/discover/recommend', component: JMRecommend },
      { path: '/discover/rank', component: JMRank },
      { path: '/discover/album', component: JMAlbum },
      { path: '/discover/radio', component: JMRadio },
      { path: '/discover/singer', component: JMSinger },
      { path: '/discover/toplist', component: JMToplist }
    ]
  },
  {
    path: '/friend',
    component: Friend
  },
  {
    path: '/mine',
    component: Mine
  }
]

export default routes