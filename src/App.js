import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import Root from './Pages/Root'
import Create from './Create/Create'
import Home from './Home/Home'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='create' element={<Create />} />
      {/* ... etc. */}
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App
