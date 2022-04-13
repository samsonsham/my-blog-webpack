const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()
  return (
    <footer>
      <p>&copy; {year} Samson Sham</p>
    </footer>
  )
}

export default Footer
