const Layout =({
    children,
  }: {
    children: React.ReactNode
  })  => {
    return (
     <div className="flex-center min-h-screen w-full bg-primary bg-dotted-pattern bg-cover bg-fixed bg-cenetr">
        {children}
     </div> 
    )
  }
  

  export default Layout