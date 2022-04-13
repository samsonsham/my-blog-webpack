import { SiWebpack, SiTypescript } from 'react-icons/si'

const HomePage = () => (
  <>
    <article className="home">
      <div className="home__icon">
        <img src="https://ik.imagekit.io/c5xc1x6srka/samsonsham_s_96y7x0KRu.png" />
      </div>
      <h1 className="home__heading">Hello, welcome to my blog!</h1>
      <p className="home__paragraph">
        Welcome to my blog! This is a full stack project based on{' '}
        <a href="https://www.linkedin.com/learning/react-creating-and-hosting-a-full-stack-site/react-for-full-stack-solutions">
          React: Creating and hosting a Full Stack Site
        </a>{' '}
        by <i>Shaun Wassell</i>. This is basically a MERN tech stack. M-E-R-N
        includes <strong>Mongo DB</strong>, <strong>Epress</strong>,{' '}
        <strong>React</strong>, <strong>Node.js</strong>. While the original
        front-end part tutorial is using create-react-app and js. This blog is
        built with <strong>WebPack</strong> and <strong>Typescript</strong>. The
        blog is hosted in AWS EC2.
      </p>
      <p className="home__paragraph">
        Donec vel mauris lectus. Etiam nec lectus urna. Sed sodales ultrices
        dapibus. Nam blandit tristique risus, eget accumsan nisl interdum eu.
        Aenean ac accumsan nisi. Nunc vel pulvinar diam. Nam eleifend egestas
        viverra. Donec finibus lectus sed lorem ultricies, eget ornare leo
        luctus. Morbi vehicula, nulla eu tempor interdum, nibh elit congue
        tellus, ac vulputate urna lorem nec nisi. Morbi id consequat quam.
        Vivamus accumsan dui in facilisis aliquet.,
      </p>
      <p className="home__paragraph">
        Etiam nec lectus urna. Sed sodales ultrices dapibus. Nam blandit
        tristique risus, eget accumsan nisl interdum eu. Aenean ac accumsan
        nisi. Nunc vel pulvinar diam. Nam eleifend egestas viverra. Donec
        finibus lectus sed lorem ultricies, eget ornare leo luctus. Morbi
        vehicula, nulla eu tempor interdum, nibh elit congue tellus, ac
        vulputate urna lorem nec nisi. Morbi id consequat quam. Vivamus accumsan
        dui in facilisis aliquet.,
      </p>
    </article>
  </>
)

export default HomePage
