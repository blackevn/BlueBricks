import useWidth from "./useWidth";


const useVariants = () => {

    const [ width ] = useWidth()

    const filterNavVariants = {
        hidden: {
            x: '-200vw',
            opacity: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.3
                
            }
        },

        show: {
            x: 0,
            opacity: 1,
            transition: {
                ease: 'easeIn',
                duration: 0.3
            }
        }
    }


    const toastVariants = {
        hidden: {
            opacity: 0,
           
            transition: {
                ease: 'easeIn'
            }
        },

        show: {
            opacity: 1,
           
            transition: {
                stiffness: 100,
                damping: 24
            }
        }
    }


    const modalVariants = {
        hidden: {
            y: 1200,
           },
        show: {
        y: 0,     
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20
             }
        }
    }

    const modalChildrenVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1
        }
    }

  

  return {

    modalVariants,  
    modalChildrenVariants,
    toastVariants, 
    filterNavVariants

  }
}

export default useVariants
