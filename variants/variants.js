export const menuVariants = {
  opened: {
    height: "8vh"
  },
  closed: {
    height: "0"
  }
}

export const mobileMenuVariants = {
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

export const aboutContainerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    }
  }
}

export const downVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}

export const upVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    }
  }
}

export const projectsVariants = {
  initial: {
    opacity: 0,
  },
  animate: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay
    }
  }),
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    }
  },
}