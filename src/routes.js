import Listing from './components/listing'
import Detail from './components/detail'

const routes = [
    {
        path: '/',
        component: Listing,
        exact: true
    },
    {
        path: '/blog/:id',
        component: Detail
    }
]

export default routes