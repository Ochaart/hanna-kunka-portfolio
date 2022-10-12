export const menuVariants = {
  opened: {
    height: "100vh"
  },
  closed: {
    height: "0"
  }
}

export const moduleVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: .5,
    }
  }
}