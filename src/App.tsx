import { Navigate, Route, Routes, useRoutes } from 'react-router-dom'
import Container from './components/Container'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ArticlesListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './pages/NotFound'

const App = () => (
  <>
    <ScrollToTop>
      <Header />
      <Container>
        <div className="page-body">
          <Routes>
            <Route path="/my-blog-webpack" element={<HomePage />} />
            <Route path="/my-blog-webpack/about" element={<AboutPage />} />
            <Route
              path="/my-blog-webpack/articles-list"
              element={<ArticlesListPage />}
            />
            <Route
              path="/my-blog-webpack/article/:name"
              element={<ArticlePage />}
            />
            <Route path="/my-blog-webpack/404" element={<NotFound />} />
            <Route
              path="/my-blog-webpack/*"
              element={<Navigate replace to="/my-blog-webpack/404" />}
            />
          </Routes>
        </div>
      </Container>
      <Footer />
    </ScrollToTop>
  </>
)

export default App
