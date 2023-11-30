import Header from './header'

const Layout: React.FC<Props> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  )
}

export default Layout;